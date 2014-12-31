## zvsMobile Home Automation App ##
Remotely control and monitor lights, thermostats, doorlocks and sensors.

<img src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/main-ss200.png">
<img align="right" src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/marketQR.png">

## Interaction ##
The zVirtualScenes WebApi2 plugin exposes a RESTful HTTP based API that client applications can use to interact with zVirtualScenes. zvsMobile for Android and Windows Phone Mobile is an example of a client application that is capable of consuming the WebApi.

## Setup ##
1. zVirtualScenes - Configure the WebApi2 plug-in in zVirtualScenes
   * Turn the plug-in on
   * Enter a desired port
   * Set a secure token (passphase) that you will later enter on your mobile devices. 
   * Note the IP of the computer running zVirtualScenes
   * Allow inbound connections on the port you selected in the Windows Firewall

2. zvsMobile - Open the settings screen in zvsMobile
    * URL: enter 'http://1.1.1.1' where 1.1.1.1 is the IP of your zVirtualScenes computer noted above 
    * Port: enter the same port you have set in zVirtualScenes above.
    * Token: enter the secure token you created above.  

Note: You can optionally setup zvsMobile to work outside your local LAN by opening the above port in your home router. Then use a service such as dyndns to track your IP.  Then change the URL from 'http://1.1.1.1' to 'http://myhomenetwork.dyndns.org' where myhomenetwork is your dyndns address. 

#### zVirtualScenes Settings Example ####
<img src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/webapi-plugin-settings-zVirtualScenes.png">

#### zvsMobile Settings Example ####
<img src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/zvsMobile-Settings-Setup.png">


## Troubleshooting ##

####Access Denied or similar is displayed in the log when starting the plug-in####
Close zVirtualScenes and start it with administrator privileges. Alternatively you can Google "How to configure HTTPLISTENER to run without administrator privileges?" for tutorials that will allow you to use certain ports without running the entire app with admin rights.

####Port already in use or similar is displayed in the log when starting the plug-in####
Other software on your computer may already be using the port that the WebApi is trying to use. Simply changing the port in the Plugin Manger to an unused port will resolve this problem.

####zvsMobile displays ‘Communication Error’ when clicking the login button.####
The most common cause of this error is Windows Firewall is blocking incoming requests to the port used. To resolve the issue, you simply need to allow incoming TCP traffic on port 8085 (or the alternative port your selected in the zVirtualScenes plugin manager; 8085 is the default) using Windows Firewall via the Windows Control Panel. There are many tutorials on Google that provide step by step instructions on how to do this if further help is needed.

The second most common problem is the IP entered in the WebApi2 URL input box is not correct. On the computer running zVirtualScenes, open the command prompt the type ipconfig to verify the IP.
