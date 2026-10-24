/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileDownloadData_contactSmds
 * @description
 * 
 * Asks the IPA to retrieve the SM-DP+ address and EventID from an SM-DS.
 * Retrieval uses ES11 as defined in SGP.22 section 3.6.2, or ESipa and ES11'
 * as defined in SGP.32 section 3.9.2.2. SGP.32 v1.2, section 2.11.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadData-contactSmds ::= SEQUENCE {
 *     smdsAddress UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileDownloadData_contactSmds {
    /**
     * @summary `smdsAddress`.
     * @description
     * Present when the eIM specifies the SM-DS address. Absent when the IPA uses
     * the SM-DS address available in the IoT Device. SGP.32 v1.2, section
     * 2.11.1.3.
     * @public
     * @readonly
     */
    public readonly smdsAddress?: OPTIONAL<UTF8String>;

    constructor (
        smdsAddress?: OPTIONAL<UTF8String>
    ) {
        this.smdsAddress = smdsAddress;
    }

    /**
     * @summary Restructures an object into a ProfileDownloadData_contactSmds
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileDownloadData_contactSmds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileDownloadData_contactSmds`.
     * @returns {ProfileDownloadData_contactSmds}
     */
    public static _from_object (_o: { [_K in keyof (ProfileDownloadData_contactSmds)]: (ProfileDownloadData_contactSmds)[_K] }): ProfileDownloadData_contactSmds {
        return new ProfileDownloadData_contactSmds(_o.smdsAddress);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileDownloadData_contactSmds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileDownloadData_contactSmds: $.ComponentSpec[] = [
    new $.ComponentSpec("smdsAddress", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ProfileDownloadData_contactSmds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileDownloadData_contactSmds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileDownloadData_contactSmds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileDownloadData_contactSmds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileDownloadData_contactSmds: $.ASN1Decoder<ProfileDownloadData_contactSmds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadData_contactSmds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadData_contactSmds (el: _Element): ProfileDownloadData_contactSmds {
    if (!_cached_decoder_for_ProfileDownloadData_contactSmds) { _cached_decoder_for_ProfileDownloadData_contactSmds = function (el: _Element): ProfileDownloadData_contactSmds {
    let smdsAddress: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "smdsAddress": (_el: _Element): void => { smdsAddress = $._decodeUTF8String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileDownloadData_contactSmds,
        _extension_additions_list_spec_for_ProfileDownloadData_contactSmds,
        _root_component_type_list_2_spec_for_ProfileDownloadData_contactSmds,
        undefined,
    );
    return new ProfileDownloadData_contactSmds(
        smdsAddress
    );
}; }
    return _cached_decoder_for_ProfileDownloadData_contactSmds(el);
}

let _cached_encoder_for_ProfileDownloadData_contactSmds: $.ASN1Encoder<ProfileDownloadData_contactSmds> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadData_contactSmds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadData_contactSmds, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadData_contactSmds (value: ProfileDownloadData_contactSmds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadData_contactSmds) { _cached_encoder_for_ProfileDownloadData_contactSmds = function (value: ProfileDownloadData_contactSmds): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.smdsAddress === undefined) ? undefined : $._encodeUTF8String(value.smdsAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileDownloadData_contactSmds(value, elGetter);
}


/* eslint-enable */
