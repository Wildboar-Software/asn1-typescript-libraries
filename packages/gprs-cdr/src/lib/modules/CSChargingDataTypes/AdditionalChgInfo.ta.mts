/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AdditionalChgInfo_chargeIndicator, _encode_AdditionalChgInfo_chargeIndicator, AdditionalChgInfo_chargeIndicator } from "../CSChargingDataTypes/AdditionalChgInfo-chargeIndicator.ta.mjs";


/**
 * @summary AdditionalChgInfo
 * @description
 *
 * Charge indicator and additional charging parameters, included when they
 * are available. Under CAMEL CPH the same information is recorded per
 * outgoing leg. This module keeps the component on the parent CDR rather
 * than inside `CAMELInformation` (clause 5.1.3.14).
 *
 * 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalChgInfo ::= SEQUENCE {
 *    chargeIndicator    [0] IMPLICIT INTEGER {
 *       noCharge    ( 0 ),
 *       charge      ( 1 )} OPTIONAL,
 *    chargeParameters   [1] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AdditionalChgInfo {
    /**
     * @summary `chargeIndicator`.
     * @description
     *
     * Charge or no-charge indicator, included when available. 3GPP TS 32.250
     * V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly chargeIndicator: OPTIONAL<AdditionalChgInfo_chargeIndicator>;
    /**
     * @summary `chargeParameters`.
     * @description
     *
     * Additional charging parameters, included when available. TS 32.250 does
     * not define their contents. 3GPP TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly chargeParameters: OPTIONAL<OCTET_STRING>;

    constructor (
        chargeIndicator?: OPTIONAL<AdditionalChgInfo_chargeIndicator>,
        chargeParameters?: OPTIONAL<OCTET_STRING>
    ) {
        this.chargeIndicator = chargeIndicator;
        this.chargeParameters = chargeParameters;
    }

    /**
     * @summary Restructures an object into a AdditionalChgInfo
     * @description
     *
     * This takes an `object` and converts it to a `AdditionalChgInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalChgInfo`.
     * @returns {AdditionalChgInfo}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalChgInfo)]: (AdditionalChgInfo)[_K] }): AdditionalChgInfo {
        return new AdditionalChgInfo(_o.chargeIndicator, _o.chargeParameters);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalChgInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalChgInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("chargeIndicator", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargeParameters", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AdditionalChgInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalChgInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalChgInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalChgInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalChgInfo: $.ASN1Decoder<AdditionalChgInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalChgInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalChgInfo (el: _Element): AdditionalChgInfo {
    if (!_cached_decoder_for_AdditionalChgInfo) { _cached_decoder_for_AdditionalChgInfo = function (el: _Element): AdditionalChgInfo {
    let chargeIndicator: OPTIONAL<AdditionalChgInfo_chargeIndicator>;
    let chargeParameters: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "chargeIndicator": (_el: _Element): void => { chargeIndicator = $._decode_implicit<AdditionalChgInfo_chargeIndicator>(() => _decode_AdditionalChgInfo_chargeIndicator)(_el); },
        "chargeParameters": (_el: _Element): void => { chargeParameters = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AdditionalChgInfo,
        _extension_additions_list_spec_for_AdditionalChgInfo,
        _root_component_type_list_2_spec_for_AdditionalChgInfo,
        undefined,
    );
    return new AdditionalChgInfo(
        chargeIndicator,
        chargeParameters
    );
}; }
    return _cached_decoder_for_AdditionalChgInfo(el);
}

let _cached_encoder_for_AdditionalChgInfo: $.ASN1Encoder<AdditionalChgInfo> | null = null;

/**
 * @summary Encodes a(n) AdditionalChgInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalChgInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalChgInfo (value: AdditionalChgInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalChgInfo) { _cached_encoder_for_AdditionalChgInfo = function (value: AdditionalChgInfo, _elGetter: $.ASN1Encoder<AdditionalChgInfo>): _Element {
    const _components: _Element[] = [];
    if (value.chargeIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AdditionalChgInfo_chargeIndicator, $.BER)(value.chargeIndicator, $.BER));
    }
    if (value.chargeParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.chargeParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AdditionalChgInfo(value, elGetter);
}


/* eslint-enable */
