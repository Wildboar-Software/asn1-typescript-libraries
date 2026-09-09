/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import {
    RegistrationType,
    _enum_for_RegistrationType,
    _decode_RegistrationType,
    _encode_RegistrationType
} from "../CSTA-status-reporting/RegistrationType.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary RegistrationListEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationListEntry ::= SEQUENCE
 * {    registrationType        RegistrationType,
 *     registrationID            IA5String,
 *     registrationObject        DeviceID        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RegistrationListEntry {
    constructor (
        /**
         * @summary `registrationType`.
         * @public
         * @readonly
         */
        readonly registrationType: RegistrationType,
        /**
         * @summary `registrationID`.
         * @public
         * @readonly
         */
        readonly registrationID: IA5String,
        /**
         * @summary `registrationObject`.
         * @public
         * @readonly
         */
        readonly registrationObject: OPTIONAL<DeviceID>
    ) {}

    /**
     * @summary Restructures an object into a RegistrationListEntry
     * @description
     * 
     * This takes an `object` and converts it to a `RegistrationListEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistrationListEntry`.
     * @returns {RegistrationListEntry}
     */
    public static _from_object (_o: { [_K in keyof (RegistrationListEntry)]: (RegistrationListEntry)[_K] }): RegistrationListEntry {
        return new RegistrationListEntry(_o.registrationType, _o.registrationID, _o.registrationObject);
    }

        /**
         * @summary The enum used as the type of the component `registrationType`
         * @public
         * @static
         */

    public static _enum_for_registrationType = _enum_for_RegistrationType;
}

/**
 * @summary The Leading Root Component Types of RegistrationListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegistrationListEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("registrationType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("registrationID", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("registrationObject", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RegistrationListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegistrationListEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegistrationListEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegistrationListEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegistrationListEntry: $.ASN1Decoder<RegistrationListEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationListEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationListEntry (el: _Element): RegistrationListEntry {
    if (!_cached_decoder_for_RegistrationListEntry) { _cached_decoder_for_RegistrationListEntry = function (el: _Element): RegistrationListEntry {
    let registrationType!: RegistrationType;
    let registrationID!: IA5String;
    let registrationObject: OPTIONAL<DeviceID>;
    const callbacks: $.DecodingMap = {
        "registrationType": (_el: _Element): void => { registrationType = _decode_RegistrationType(_el); },
        "registrationID": (_el: _Element): void => { registrationID = $._decodeIA5String(_el); },
        "registrationObject": (_el: _Element): void => { registrationObject = _decode_DeviceID(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegistrationListEntry,
        _extension_additions_list_spec_for_RegistrationListEntry,
        _root_component_type_list_2_spec_for_RegistrationListEntry,
        undefined,
    );
    return new RegistrationListEntry(
        registrationType,
        registrationID,
        registrationObject
    );
}; }
    return _cached_decoder_for_RegistrationListEntry(el);
}

let _cached_encoder_for_RegistrationListEntry: $.ASN1Encoder<RegistrationListEntry> | null = null;

/**
 * @summary Encodes a(n) RegistrationListEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationListEntry, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationListEntry (value: RegistrationListEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationListEntry) { _cached_encoder_for_RegistrationListEntry = function (value: RegistrationListEntry, elGetter: $.ASN1Encoder<RegistrationListEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RegistrationType(value.registrationType, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.registrationID, $.BER),
            /* IF_ABSENT  */ ((value.registrationObject === undefined) ? undefined : _encode_DeviceID(value.registrationObject, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegistrationListEntry(value, elGetter);
}


/* eslint-enable */
