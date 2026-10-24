/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CIProtectionLevel, _decode_CIProtectionLevel, _encode_CIProtectionLevel, _enum_for_CIProtectionLevel } from "../Call-Intrusion-Operations-asn1-97/CIProtectionLevel.ta.mjs";
import { type CIGetCIPLRes_resultExtension, _decode_CIGetCIPLRes_resultExtension, _encode_CIGetCIPLRes_resultExtension } from "../Call-Intrusion-Operations-asn1-97/CIGetCIPLRes-resultExtension.ta.mjs";

/**
 * @summary CIGetCIPLRes
 * @description
 *
 * Result of `callIntrusionGetCIPL` (ECMA-203 §6.3.1). The Unwanted
 * User PINX returns the unwanted user's CIPL (§6.6.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIGetCIPLRes ::= SEQUENCE {
 *     ciProtectionLevel CIProtectionLevel,
 *     resultExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{CIExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CIExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CIGetCIPLRes {
    /**
     * @summary `ciProtectionLevel`.
     * @description
     *
     * CIPL of the unwanted user (ECMA-203 §6.6.3). The Terminating PINX
     * continues only when the calling user's CICL is higher than this
     * value (§6.6.2.1.1).
     * @public
     * @readonly
     */
    readonly ciProtectionLevel: CIProtectionLevel;
    /**
     * @summary `resultExtension`.
     * @description
     *
     * Optional manufacturer-specific data from `CIExtSet`. ECMA-203
     * §6.6.3 requires only the CIPL and does not mention this component.
     * @public
     * @readonly
     */
    readonly resultExtension: OPTIONAL<CIGetCIPLRes_resultExtension>;

    constructor (
        ciProtectionLevel: CIProtectionLevel,
        resultExtension?: OPTIONAL<CIGetCIPLRes_resultExtension>
    ) {
        this.ciProtectionLevel = ciProtectionLevel;
        this.resultExtension = resultExtension;
    }

    /**
     * @summary Restructures an object into a CIGetCIPLRes
     * @description
     * 
     * This takes an `object` and converts it to a `CIGetCIPLRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIGetCIPLRes`.
     * @returns {CIGetCIPLRes}
     */
    public static _from_object (_o: { [_K in keyof (CIGetCIPLRes)]: (CIGetCIPLRes)[_K] }): CIGetCIPLRes {
        return new CIGetCIPLRes(_o.ciProtectionLevel, _o.resultExtension);
    }

        /**
         * @summary The enum used as the type of the component `ciProtectionLevel`
         * @public
         * @static
         */

    public static _enum_for_ciProtectionLevel = _enum_for_CIProtectionLevel;
}

/**
 * @summary The Leading Root Component Types of CIGetCIPLRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIGetCIPLRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ciProtectionLevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("resultExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CIGetCIPLRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIGetCIPLRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIGetCIPLRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIGetCIPLRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIGetCIPLRes: $.ASN1Decoder<CIGetCIPLRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIGetCIPLRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIGetCIPLRes (el: _Element): CIGetCIPLRes {
    if (!_cached_decoder_for_CIGetCIPLRes) { _cached_decoder_for_CIGetCIPLRes = function (el: _Element): CIGetCIPLRes {
    let ciProtectionLevel!: CIProtectionLevel;
    let resultExtension: OPTIONAL<CIGetCIPLRes_resultExtension>;
    const callbacks: $.DecodingMap = {
        "ciProtectionLevel": (_el: _Element): void => { ciProtectionLevel = _decode_CIProtectionLevel(_el); },
        "resultExtension": (_el: _Element): void => { resultExtension = _decode_CIGetCIPLRes_resultExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIGetCIPLRes,
        _extension_additions_list_spec_for_CIGetCIPLRes,
        _root_component_type_list_2_spec_for_CIGetCIPLRes,
        undefined,
    );
    return new CIGetCIPLRes(
        ciProtectionLevel,
        resultExtension
    );
}; }
    return _cached_decoder_for_CIGetCIPLRes(el);
}

let _cached_encoder_for_CIGetCIPLRes: $.ASN1Encoder<CIGetCIPLRes> | null = null;

/**
 * @summary Encodes a(n) CIGetCIPLRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIGetCIPLRes, encoded as an ASN.1 Element.
 */
export
function _encode_CIGetCIPLRes (value: CIGetCIPLRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIGetCIPLRes) { _cached_encoder_for_CIGetCIPLRes = function (value: CIGetCIPLRes, _elGetter: $.ASN1Encoder<CIGetCIPLRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CIProtectionLevel(value.ciProtectionLevel, $.BER));
    if (value.resultExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CIGetCIPLRes_resultExtension(value.resultExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CIGetCIPLRes(value, elGetter);
}

/* eslint-enable */
