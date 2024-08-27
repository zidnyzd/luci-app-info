/* This is free software, licensed under the Apache License, Version 2.0
 *
 * Copyright (C) 2024 Hilman Maulana <hilman0.0maulana@gmail.com>
 */

'use strict';
'require view';
'require uci';
'require fs';

return view.extend({
    title: _('IP Information'),
    handleSaveApply: null,
    handleSave: null,
    handleReset: null,
    load: function () {
        return uci.load('ipinfo').then(function() {
            var data = uci.sections('ipinfo');
            var jsonData = {};

            // Initial placeholders in the fields
            document.querySelector('[data-name="public_ip"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="name"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="organization"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="asn"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="city"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="country"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="timezone"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="latitude"] .cbi-value-field').textContent = 'Loading...';
            document.querySelector('[data-name="longitude"] .cbi-value-field').textContent = 'Loading...';

            if (data[0].enable === '0') {
                jsonData.uci = {};
                return jsonData;
            }

            jsonData.uci = {
                public_ip: data[0].public_ip,
                name: data[0].name,
                organization: data[0].organization,
                asn: data[0].asn,
                city: data[0].city,
                country: data[0].country,
                timezone: data[0].timezone,
                latitude: data[0].latitude,
                longitude: data[0].longitude
            };

            // After loading, fill the fields with the actual data
            document.querySelector('[data-name="public_ip"] .cbi-value-field').textContent = jsonData.uci.public_ip || 'Unavailable';
            document.querySelector('[data-name="name"] .cbi-value-field').textContent = jsonData.uci.name || 'Unavailable';
            document.querySelector('[data-name="organization"] .cbi-value-field').textContent = jsonData.uci.organization || 'Unavailable';
            document.querySelector('[data-name="asn"] .cbi-value-field').textContent = jsonData.uci.asn || 'Unavailable';
            document.querySelector('[data-name="city"] .cbi-value-field').textContent = jsonData.uci.city || 'Unavailable';
            document.querySelector('[data-name="country"] .cbi-value-field').textContent = jsonData.uci.country || 'Unavailable';
            document.querySelector('[data-name="timezone"] .cbi-value-field').textContent = jsonData.uci.timezone || 'Unavailable';
            document.querySelector('[data-name="latitude"] .cbi-value-field').textContent = jsonData.uci.latitude || 'Unavailable';
            document.querySelector('[data-name="longitude"] .cbi-value-field').textContent = jsonData.uci.longitude || 'Unavailable';
            
            return jsonData;
        });
    }
});
