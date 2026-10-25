/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CIUnwantedUserStatus, _decode_CIUnwantedUserStatus, _encode_CIUnwantedUserStatus, _enum_for_CIUnwantedUserStatus } from "../Call-Intrusion-Operations-asn1-97/CIUnwantedUserStatus.ta.mjs";
import { type CIRequestRes_resultExtension, _decode_CIRequestRes_resultExtension, _encode_CIRequestRes_resultExtension } from "../Call-Intrusion-Operations-asn1-97/CIRequestRes-resultExtension.ta.mjs";

/**
 * @summary CIRequestRes
 * @description
 *
 * Result of `callIntrusionRequest` (ECMA-203 §6.3.1). It reports
 * whether the unwanted user was placed in the conference or
 * isolated (§6.6.2.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIRequestRes ::= SEQUENCE {
 *     ciUnwantedUserStatus CIUnwantedUserStatus,
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
class CIRequestRes {
    /**
     * @summary `ciUnwantedUserStatus`.
     * @description
     *
     * `unwantedUserIntruded` for a three-party conference, or
     * `unwantedUserIsolated` when the unwanted user is disconnected
     * (ECMA-203 §6.6.2.1.1).
     * @public
     * @readonly
     */
    readonly ciUnwantedUserStatus: CIUnwantedUserStatus;
    /**
     * @summary `resultExtension`.
     * @description
     *
     * Optional manufacturer-specific data from `CIExtSet`. ECMA-203
     * §6.6.2.1.1 does not include it in the result that must be sent.
     * @public
     * @readonly
     */
    readonly resultExtension: OPTIONAL<CIRequestRes_resultExtension>;

    constructor (
        ciUnwantedUserStatus: CIUnwantedUserStatus,
        resultExtension?: OPTIONAL<CIRequestRes_resultExtension>
    ) {
        this.ciUnwantedUserStatus = ciUnwantedUserStatus;
        this.resultExtension = resultExtension;
    }

    /**
     * @summary Restructures an object into a CIRequestRes
     * @description
     * 
     * This takes an `object` and converts it to a `CIRequestRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIRequestRes`.
     * @returns {CIRequestRes}
     */
    public static _from_object (_o: { [_K in keyof (CIRequestRes)]: (CIRequestRes)[_K] }): CIRequestRes {
        return new CIRequestRes(_o.ciUnwantedUserStatus, _o.resultExtension);
    }

        /**
         * @summary The enum used as the type of the component `ciUnwantedUserStatus`
         * @public
         * @static
         */

    public static _enum_for_ciUnwantedUserStatus: typeof _enum_for_CIUnwantedUserStatus = _enum_for_CIUnwantedUserStatus;
}

/**
 * @summary The Leading Root Component Types of CIRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIRequestRes: $.ComponentSpec[] = [
    new $.ComponentSpec("ciUnwantedUserStatus", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("resultExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CIRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIRequestRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIRequestRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIRequestRes: $.ASN1Decoder<CIRequestRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIRequestRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIRequestRes (el: _Element): CIRequestRes {
    if (!_cached_decoder_for_CIRequestRes) { _cached_decoder_for_CIRequestRes = function (el: _Element): CIRequestRes {
    let ciUnwantedUserStatus!: CIUnwantedUserStatus;
    let resultExtension: OPTIONAL<CIRequestRes_resultExtension>;
    const callbacks: $.DecodingMap = {
        "ciUnwantedUserStatus": (_el: _Element): void => { ciUnwantedUserStatus = _decode_CIUnwantedUserStatus(_el); },
        "resultExtension": (_el: _Element): void => { resultExtension = _decode_CIRequestRes_resultExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIRequestRes,
        _extension_additions_list_spec_for_CIRequestRes,
        _root_component_type_list_2_spec_for_CIRequestRes,
        undefined,
    );
    return new CIRequestRes(
        ciUnwantedUserStatus,
        resultExtension
    );
}; }
    return _cached_decoder_for_CIRequestRes(el);
}

let _cached_encoder_for_CIRequestRes: $.ASN1Encoder<CIRequestRes> | null = null;

/**
 * @summary Encodes a(n) CIRequestRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIRequestRes, encoded as an ASN.1 Element.
 */
export
function _encode_CIRequestRes (value: CIRequestRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIRequestRes) { _cached_encoder_for_CIRequestRes = function (value: CIRequestRes, _elGetter: $.ASN1Encoder<CIRequestRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CIUnwantedUserStatus(value.ciUnwantedUserStatus, $.BER));
    if (value.resultExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CIRequestRes_resultExtension(value.resultExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CIRequestRes(value, elGetter);
}

/* eslint-enable */
