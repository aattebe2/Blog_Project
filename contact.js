function resetContactForm() {
    document.contactForm.fName.value = "";
    document.contactForm.lName.value = "";
    document.contactForm.email.value = "";
    document.contactForm.country.selectedIndex = 0;
    document.contactForm.message.value = "";
}

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function submitContact() {
    var fname = document.contactForm.fName.value;
    var lname = document.contactForm.lName.value;
    var email = document.contactForm.email.value;
    var country = getCountryName(document.contactForm.country.selectedIndex);
    var message = document.contactForm.message.value;
    var fnameErr = lnameErr = emailErr = countryErr = messageErr = true;

    if (fname == "") {
        printError("fnameErr", "Please enter your first name");
        document.contactForm.fName.className = "input-error";
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(fname) === false) {
            printError("fnameErr", "Please enter a valid first name");
            document.contactForm.fName.className = "input-error";
        } else {
            printError("fnameErr", "");
            document.contactForm.fName.className = "";
            fnameErr = false;
        }
    }

    if (lname == "") {
        printError("lnameErr", "Please enter your last name");
        document.contactForm.lName.className = "input-error";
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid last name");
            document.contactForm.lName.className = "input-error";
        } else {
            printError("lnameErr", "");
            document.contactForm.lName.className = "";
            lnameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email");
        document.contactForm.email.className = "input-error";
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
            document.contactForm.email.className = "input-error";
        } else {
            printError("emailErr", "");
            document.contactForm.email.className = "";
            emailErr = false;
        }
    }

    if (country == "") {
        printError("countryErr", "Please select your country");
        document.contactForm.country.className = "input-error";
    } else {
        printError("countryErr", "");
        document.contactForm.country.className = "";
        countryErr = false;
    }

    if (message == "") {
        printError("messageErr", "Please enter a message");
        document.contactForm.message.className = "input-error";
    } else {
        printError("messageErr", "");
        document.contactForm.message.className = "";
        messageErr = false;
    }
    
    if (fnameErr || lnameErr || emailErr || countryErr || messageErr == true) {
        return false;
    }
    else {
        alert('Thank you for contacting us.');
    }
}

function getCountryName(countryIndex) {
    switch(countryIndex) {
        case 1:
            return 'United States';
        case 3:
            return 'Afghanistan';
        case 4:
            return 'Albania';
        case 5:
            return 'Algeria';
        case 6:
            return 'American Samoa';
        case 7:
            return 'Andorra';
        case 8:
            return 'Angola';
        case 9:
            return 'Anguilla';
        case 10:
            return 'Antigua and Barbuda';
        case 11:
            return 'Argentina';
        case 12:
            return 'Armenia';
        case 13:
            return 'Aruba';
        case 14:
            return 'Australia';
        case 15:
            return 'Austria';
        case 16:
            return 'Azerbaijan';
        case 17:
            return 'Bahamas';
        case 18:
            return 'Bahrain';
        case 19:
            return 'Bangladesh';
        case 20:
            return 'Barbados';
        case 21:
            return 'Belarus';
        case 22:
            return 'Belgium';
        case 23:
            return 'Belize';
        case 24:
            return 'Benin';
        case 25:
            return 'Bermuda';
        case 26:
            return 'Bhutan';
        case 27:
            return 'Bolivia';
        case 28:
            return 'Bosnia and Herzegovina';
        case 29:
            return 'Botswana';
        case 30:
            return 'Brazil';
        case 31:
            return 'British Virgin Islands';
        case 32:
            return 'Brunei Darussalam';
        case 33:
            return 'Bulgaria';
        case 34:
            return 'Burkina Faso';
        case 35:
            return 'Burundi';
        case 36:
            return 'Cambodia';
        case 37:
            return 'Cameroon';
        case 38:
            return 'Canada';
        case 39:
            return 'Cape Verde';
        case 40:
            return 'Cayman Islands';
        case 41:
            return 'Central African Republic';
        case 42:
            return 'Chad';
        case 43:
            return 'Chile';
        case 44:
            return 'China';
        case 45:
            return 'Christmas Island';
        case 46:
            return 'Cocos Islands';
        case 47:
            return 'Colombia';
        case 48:
            return 'Comoros';
        case 49:
            return 'Cook Islands';
        case 50:
            return 'Costa Rica';
        case 51:
            return 'Croatia';
        case 52:
            return 'Cuba';
        case 53:
            return 'Cyprus';
        case 54:
            return 'Czech Republic';
        case 55:
            return 'Democratic Republic of the Congo';
        case 56:
            return 'Denmark';
        case 57:
            return 'Djibouti';
        case 58:
            return 'Dominica';
        case 59:
            return 'Dominican Republic';
        case 60:
            return 'East Timor';
        case 61:
            return 'Ecuador';
        case 62:
            return 'Egypt';
        case 63:
            return 'El Salvador';
        case 64:
            return 'Equatorial Guinea';
        case 65:
            return 'Eritrea';
        case 66:
            return 'Estonia';
        case 67:
            return 'Ethiopia';
        case 68:
            return 'Falkland Islands';
        case 69:
            return 'Faroe Islands';
        case 70:
            return 'Federal States of Micronesia';
        case 71:
            return 'Fiji';
        case 72:
            return 'Finland';
        case 73:
            return 'France';
        case 74:
            return 'French Guiana';
        case 75:
            return 'French Polynesia';
        case 76:
            return 'French Southern Territories';
        case 77:
            return 'Gabon';
        case 78:
            return 'Georgia';
        case 79:
            return 'Germany';
        case 80:
            return 'Ghana';
        case 81:
            return 'Gibraltar';
        case 82:
            return 'Greece';
        case 83:
            return 'Greenland';
        case 84:
            return 'Grenada';
        case 85:
            return 'Guadeloupe';
        case 86:
            return 'Guam';
        case 87:
            return 'Guatemala';
        case 88:
            return 'Guinea';
        case 89:
            return 'Guinea-Bissau';
        case 90:
            return 'Guyana';
        case 91:
            return 'Haiti';
        case 92:
            return 'Honduras';
        case 93:
            return 'Hong Kong';
        case 94:
            return 'Hungary';
        case 95:
            return 'Iceland';
        case 96:
            return 'India';
        case 97:
            return 'Indonesia';
        case 98:
            return 'Iran';
        case 99:
            return 'Iraq';
        case 100:
            return 'Ireland';
        case 101:
            return 'Israel';
        case 102:
            return 'Italy';
        case 103:
            return 'Ivory Coast';
        case 104:
            return 'Jamaica';
        case 105:
            return 'Japan';
        case 106:
            return 'Jordan';
        case 107:
            return 'Kazakhstan';
        case 108:
            return 'Kenya';
        case 109:
            return 'Kiribati';
        case 110:
            return 'Kosovo';
        case 111:
            return 'Kuwait';
        case 112:
            return 'Kyrgyzstan';
        case 113:
            return 'Latvia';
        case 114:
            return 'Lebanon';
        case 115:
            return 'Lesotho';
        case 116:
            return 'Liberia';
        case 117:
            return 'Libya';
        case 118:
            return 'Liechtenstein';
        case 119:
            return 'Lithuania';
        case 120:
            return 'Luxembourg';
        case 121:
            return 'Macau';
        case 122:
            return 'Madagascar';
        case 123:
            return 'Malawi';
        case 124:
            return 'Malaysia';
        case 125:
            return 'Maldives';
        case 126:
            return 'Mali';
        case 127:
            return 'Malta';
        case 128:
            return 'Marshall Islands';
        case 129:
            return 'Martinique';
        case 130:
            return 'Mauritania';
        case 131:
            return 'Mauritius';
        case 132:
            return 'Mayotte';
        case 133:
            return 'Mexico';
        case 134:
            return 'Monaco';
        case 135:
            return 'Mongolia';
        case 136:
            return 'Montenegro';
        case 137:
            return 'Montserrat';
        case 138:
            return 'Morocco';
        case 139:
            return 'Mozambique';
        case 140:
            return 'Myanmar';
        case 141:
            return 'Namibia';
        case 142:
            return 'Nauru';
        case 143:
            return 'Nepal';
        case 144:
            return 'Netherlands';
        case 145:
            return 'Netherlands Antilles';
        case 146:
            return 'New Caledonia';
        case 147:
            return 'New Zealand';
        case 148:
            return 'Nicaragua';
        case 149:
            return 'Niger';
        case 150:
            return 'Nigeria';
        case 151:
            return 'Niue';
        case 152:
            return 'North Korea';
        case 153:
            return 'North Macedonia';
        case 154:
            return 'Northern Mariana Islands';
        case 155:
            return 'Norway';
        case 156:
            return 'Oman';
        case 157:
            return 'Pakistan';
        case 158:
            return 'Palau';
        case 159:
            return 'Palestinian territories';
        case 160:
            return 'Panama';
        case 161:
            return 'Papua New Guinea';
        case 162:
            return 'Paraguay';
        case 163:
            return 'People\'s Democratic Republic Lao';
        case 164:
            return 'Peru';
        case 165:
            return 'Philippines';
        case 166:
            return 'Pitcairn Island';
        case 167:
            return 'Poland';
        case 168:
            return 'Portugal';
        case 169:
            return 'Puerto Rico';
        case 170:
            return 'Qatar';
        case 171:
            return 'Republic of Congo';
        case 172:
            return 'Republic of Moldova';
        case 173:
            return 'Reunion Island';
        case 174:
            return 'Romania';
        case 175:
            return 'Russian Federation';
        case 176:
            return 'Rwanda';
        case 177:
            return 'Saint Kitts and Nevis';
        case 178:
            return 'Saint Lucia';
        case 179:
            return 'Saint Vincent and the Grenadines';
        case 180:
            return 'Samoa';
        case 181:
            return 'San Marino';
        case 182:
            return 'Sao Tome and Principe';
        case 183:
            return 'Saudi Arabia';
        case 184:
            return 'Senegal';
        case 185:
            return 'Serbia';
        case 186:
            return 'Seychelles';
        case 187:
            return 'Sierra Leone';
        case 188:
            return 'Singapore';
        case 189:
            return 'Slovakia';
        case 190:
            return 'Slovenia';
        case 191:
            return 'Solomon Islands';
        case 192:
            return 'Somalia';
        case 193:
            return 'South Africa';
        case 194:
            return 'South Korea';
        case 195:
            return 'South Sudan';
        case 196:
            return 'Spain';
        case 197:
            return 'Sri Lanka';
        case 198:
            return 'Sudan';
        case 199:
            return 'Suriname';
        case 200:
            return 'Swaziland';
        case 201:
            return 'Sweden';
        case 202:
            return 'Switzerland';
        case 203:
            return 'Syria';
        case 204:
            return 'Taiwan';
        case 205:
            return 'Tajikistan';
        case 206:
            return 'Thailand';
        case 207:
            return 'The Gambia';
        case 208:
            return 'Tibet';
        case 209:
            return 'Togo';
        case 210:
            return 'Tokelau';
        case 211:
            return 'Tonga';
        case 212:
            return 'Trinidad and Tobago';
        case 213:
            return 'Tunisia';
        case 214:
            return 'Turkey';
        case 215:
            return 'Turkmenistan';
        case 216:
            return 'Turks and Caicos Islands';
        case 217:
            return 'Tuvalu';
        case 218:
            return 'U.S. Virgin Islands';
        case 219:
            return 'Uganda';
        case 220:
            return 'Ukraine';
        case 221:
            return 'United Arab Emirates';
        case 222:
            return 'United Kingdom';
        case 223:
            return 'United Republic of Tanzania';
        case 224:
            return 'Uruguay';
        case 225:
            return 'Uzbekistan';
        case 226:
            return 'Vanuatu';
        case 227:
            return 'Vatican City';
        case 228:
            return 'Venezuela';
        case 229:
            return 'Vietnam';
        case 230:
            return 'Wallis and Futuna Islands';
        case 231:
            return 'Western Sahara';
        case 232:
            return 'Yemen';
        case 233:
            return 'Zambia';
        case 234:
            return 'Zimbabwe';
        default:
            return "";
    }
}