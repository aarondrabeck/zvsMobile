## zvsMobile Home Automation App ##
=========
Remotely control and monitor lights, thermostats, doorlocks and sensors.

<img src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/main-ss200.png">
<img align="right" src="https://raw.githubusercontent.com/aarondrabeck/zvsMobile/master/zvsMobile/images/marketQR.png">

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
