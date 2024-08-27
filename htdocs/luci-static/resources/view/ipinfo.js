/* This is free software, licensed under the Apache License, Version 2.0
 *
 * Copyright (C) 2024 Hilman Maulana <hilman0.0maulana@gmail.com>
 */

'use strict';
'require view';
'require form';

return view.extend({
    render: function () {
        var m, s;
        m = new form.Map('ipinfo', _('IP Information'),
            _('Shows public IP information in Overview LuCI with <a %s>ip.guide</a>.').format('href="https://ip.guide" target="_blank"'));

        s = m.section(form.NamedSection, 'config', 'ipinfo');

        // Initial render with empty fields for all IP info
        s.option(form.Value, 'public_ip', _('Public IP')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'name', _('Name')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'organization', _('Organization')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'asn', _('ASN')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'city', _('City')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'country', _('Country')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'timezone', _('Timezone')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'latitude', _('Latitude')).textvalue = function() {
            return 'Loading...';
        };
        s.option(form.Value, 'longitude', _('Longitude')).textvalue = function() {
            return 'Loading...';
        };

        return m.render();
    }
});
