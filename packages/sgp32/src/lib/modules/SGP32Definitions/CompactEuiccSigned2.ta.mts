/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";
// export { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";


/**
 * @summary CompactEuiccSigned2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactEuiccSigned2 ::= SEQUENCE {
 *     euiccOtpk [APPLICATION 73] OCTET STRING OPTIONAL, -- otPK.EUICC.ECKA, tag '5F49' euiccOtpk is always present except if bppEuiccOtpk was chosen by the eUICC
 *     hashCc Octet32 OPTIONAL -- Hash of confirmation code, if not received from eIM
 * }
 * ```
 * 
 * @class
 */
export
class CompactEuiccSigned2 {
    constructor (
        /**
         * @summary `euiccOtpk`.
         * @public
         * @readonly
         */
        readonly euiccOtpk: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `hashCc`.
         * @public
         * @readonly
         */
        readonly hashCc: OPTIONAL<Octet32>
    ) {}

    /**
     * @summary Restructures an object into a CompactEuiccSigned2
     * @description
     * 
     * This takes an `object` and converts it to a `CompactEuiccSigned2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactEuiccSigned2`.
     * @returns {CompactEuiccSigned2}
     */
    public static _from_object (_o: { [_K in keyof (CompactEuiccSigned2)]: (CompactEuiccSigned2)[_K] }): CompactEuiccSigned2 {
        return new CompactEuiccSigned2(_o.euiccOtpk, _o.hashCc);
    }


}

/**
 * @summary The Leading Root Component Types of CompactEuiccSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactEuiccSigned2: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccOtpk", true, $.hasTag(_TagClass.application, 73)),
    new $.ComponentSpec("hashCc", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of CompactEuiccSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactEuiccSigned2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactEuiccSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactEuiccSigned2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactEuiccSigned2: $.ASN1Decoder<CompactEuiccSigned2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactEuiccSigned2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactEuiccSigned2 (el: _Element): CompactEuiccSigned2 {
    if (!_cached_decoder_for_CompactEuiccSigned2) { _cached_decoder_for_CompactEuiccSigned2 = function (el: _Element): CompactEuiccSigned2 {
    let euiccOtpk: OPTIONAL<OCTET_STRING>;
    let hashCc: OPTIONAL<Octet32>;
    const callbacks: $.DecodingMap = {
        "euiccOtpk": (_el: _Element): void => { euiccOtpk = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hashCc": (_el: _Element): void => { hashCc = _decode_Octet32(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactEuiccSigned2,
        _extension_additions_list_spec_for_CompactEuiccSigned2,
        _root_component_type_list_2_spec_for_CompactEuiccSigned2,
        undefined,
    );
    return new CompactEuiccSigned2(
        euiccOtpk,
        hashCc
    );
}; }
    return _cached_decoder_for_CompactEuiccSigned2(el);
}

let _cached_encoder_for_CompactEuiccSigned2: $.ASN1Encoder<CompactEuiccSigned2> | null = null;

/**
 * @summary Encodes a(n) CompactEuiccSigned2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactEuiccSigned2, encoded as an ASN.1 Element.
 */
export
function _encode_CompactEuiccSigned2 (value: CompactEuiccSigned2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactEuiccSigned2) { _cached_encoder_for_CompactEuiccSigned2 = function (value: CompactEuiccSigned2, elGetter: $.ASN1Encoder<CompactEuiccSigned2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.euiccOtpk === undefined) ? undefined : $._encode_implicit(_TagClass.application, 73, () => $._encodeOctetString, $.BER)(value.euiccOtpk, $.BER)),
            /* IF_ABSENT  */ ((value.hashCc === undefined) ? undefined : _encode_Octet32(value.hashCc, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactEuiccSigned2(value, elGetter);
}


/* eslint-enable */
