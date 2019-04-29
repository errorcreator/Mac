package com.apple.definations;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;

import com.apple.pages.BagPage;
import com.apple.pages.HomePage;
import com.apple.pages.MacProductsPage;
import com.apple.pages.MacbookProPage;
import com.common.utils.CommonUtil;
import com.test.base.TestBase;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.DataTableRow;
import junit.framework.Assert;

public class Stepdefinitions extends TestBase{
	
	WebDriver driver = getDriver();
	HomePage home = getHomePage();
	MacProductsPage mac = getMacBookProducts();
	MacbookProPage macbookPro = getMacBookPro();
	BagPage bag = getBagPage();
	Map<String, String> specifations;
	
	
	private String url;
	

	@Given("^the url \"([^\"]*)\"$")
	public void the_url(String url) throws Throwable {
		System.out.println("url: "+ url);
		this.url = url;
	}

	@Given("^I go to the url$")
	public void i_go_to_the_url() throws Throwable {
		System.out.println("Go to url");
		driver.get(url);
	}

	@When("^I choose a MacBook Pro with the following features and accessories$")
	public void i_choose_a_MacBook_Pro_with_the_following_features_and_accessories(DataTable dTable) throws Throwable {
		//Data table as Map
		specifations = CommonUtil.converDtToMap(dTable);	
		
		home.navigateToMacBookPage();
		mac.navigateToMacBookPro();
		macbookPro.order(specifations.get("Screen"), specifations.get("Colour"), specifations.get("Processor"), specifations.get("Memory RAM"), specifations.get("Software"));
		

	}

	@Then("^I can place an order for it\\.$")
	public void i_can_place_an_order_for_it() throws Throwable {
		
	}

	@Given("^when I choose the following items:$")
	public void when_I_choose_the_following_items(DataTable dTable) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		
	}
	

	@When("^I proceed to the checkout$")
	public void i_proceed_to_the_checkout() throws Throwable {
		System.out.println("Checkout");
	}

	
	@Then("^a total price of \"([^\"]*)\" will be displayed$")
	public void a_total_price_of_will_be_displayed(String totalPrice) throws Throwable {
		 Map<String,String> itemsPrice = bag.getPricesForAllItems();
		 
		 Assert.assertEquals(totalPrice, bag.getTaxValue());
		
	}

	@Then("^\"([^\"]*)\" will be listed for VAT\\.VAT$")
	public void will_be_listed_for_VAT_VAT(String vatPrice) throws Throwable {
		 Assert.assertEquals(vatPrice, bag.getTotalValue().toString());
	}
}
