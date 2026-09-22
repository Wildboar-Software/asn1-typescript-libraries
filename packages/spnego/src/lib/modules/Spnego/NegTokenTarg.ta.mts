/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NegTokenTarg_negResult, _decode_NegTokenTarg_negResult, _encode_NegTokenTarg_negResult, _enum_for_NegTokenTarg_negResult } from "../Spnego/NegTokenTarg-negResult.ta.mjs";
// export { NegTokenTarg_negResult, _enum_for_NegTokenTarg_negResult, NegTokenTarg_negResult_accept_completed /* IMPORTED_LONG_ENUMERATION_ITEM */, accept_completed /* IMPORTED_SHORT_ENUMERATION_ITEM */, NegTokenTarg_negResult_accept_incomplete /* IMPORTED_LONG_ENUMERATION_ITEM */, accept_incomplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, NegTokenTarg_negResult_reject /* IMPORTED_LONG_ENUMERATION_ITEM */, reject /* IMPORTED_SHORT_ENUMERATION_ITEM */, NegTokenTarg_negResult_request_mic /* IMPORTED_LONG_ENUMERATION_ITEM */, request_mic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NegTokenTarg_negResult, _encode_NegTokenTarg_negResult } from "../Spnego/NegTokenTarg-negResult.ta.mjs";
import { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";
// export { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";
import { MechTypeList, _decode_MechTypeList, _encode_MechTypeList } from "../Spnego/MechTypeList.ta.mjs";
// export { MechTypeList, _decode_MechTypeList, _encode_MechTypeList } from "../Spnego/MechTypeList.ta.mjs";


/**
 * @summary NegTokenTarg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg ::= SEQUENCE {
 *     negResult      [0] ENUMERATED {
 *                             accept-completed    (0),
 *                             accept-incomplete   (1),
 *                             reject              (2),
 *                             request-mic         (3) }          OPTIONAL,
 *     supportedMech  [1] MechType                                OPTIONAL,
 *     responseToken  [2] OCTET STRING                            OPTIONAL,
 *     mechListMIC    [3] OCTET STRING                            OPTIONAL,
 *     -- [MS-SPNG] Late Fallback Mechanism
 *     mechTypes      [4] MechTypeList                            OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NegTokenTarg {
    constructor (
        /**
         * @summary `negResult`.
         * @public
         * @readonly
         */
        readonly negResult: OPTIONAL<NegTokenTarg_negResult>,
        /**
         * @summary `supportedMech`.
         * @public
         * @readonly
         */
        readonly supportedMech: OPTIONAL<MechType>,
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mechListMIC`.
         * @public
         * @readonly
         */
        readonly mechListMIC: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `mechTypes`.
         * @public
         * @readonly
         */
        readonly mechTypes: OPTIONAL<MechTypeList>
    ) {}

    /**
     * @summary Restructures an object into a NegTokenTarg
     * @description
     * 
     * This takes an `object` and converts it to a `NegTokenTarg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegTokenTarg`.
     * @returns {NegTokenTarg}
     */
    public static _from_object (_o: { [_K in keyof (NegTokenTarg)]: (NegTokenTarg)[_K] }): NegTokenTarg {
        return new NegTokenTarg(_o.negResult, _o.supportedMech, _o.responseToken, _o.mechListMIC, _o.mechTypes);
    }

        /**
         * @summary The enum used as the type of the component `negResult`
         * @public
         * @static
         */

    public static _enum_for_negResult = _enum_for_NegTokenTarg_negResult;
}

/**
 * @summary The Leading Root Component Types of NegTokenTarg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NegTokenTarg: $.ComponentSpec[] = [
    new $.ComponentSpec("negResult", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supportedMech", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("responseToken", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mechListMIC", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mechTypes", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NegTokenTarg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NegTokenTarg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NegTokenTarg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NegTokenTarg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NegTokenTarg: $.ASN1Decoder<NegTokenTarg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegTokenTarg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegTokenTarg (el: _Element): NegTokenTarg {
    if (!_cached_decoder_for_NegTokenTarg) { _cached_decoder_for_NegTokenTarg = function (el: _Element): NegTokenTarg {
    let negResult: OPTIONAL<NegTokenTarg_negResult>;
    let supportedMech: OPTIONAL<MechType>;
    let responseToken: OPTIONAL<OCTET_STRING>;
    let mechListMIC: OPTIONAL<OCTET_STRING>;
    let mechTypes: OPTIONAL<MechTypeList>;
    const callbacks: $.DecodingMap = {
        "negResult": (_el: _Element): void => { negResult = $._decode_explicit<NegTokenTarg_negResult>(() => _decode_NegTokenTarg_negResult)(_el); },
        "supportedMech": (_el: _Element): void => { supportedMech = $._decode_explicit<MechType>(() => _decode_MechType)(_el); },
        "responseToken": (_el: _Element): void => { responseToken = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mechListMIC": (_el: _Element): void => { mechListMIC = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mechTypes": (_el: _Element): void => { mechTypes = $._decode_explicit<MechTypeList>(() => _decode_MechTypeList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NegTokenTarg,
        _extension_additions_list_spec_for_NegTokenTarg,
        _root_component_type_list_2_spec_for_NegTokenTarg,
        undefined,
    );
    return new NegTokenTarg(
        negResult,
        supportedMech,
        responseToken,
        mechListMIC,
        mechTypes
    );
}; }
    return _cached_decoder_for_NegTokenTarg(el);
}

let _cached_encoder_for_NegTokenTarg: $.ASN1Encoder<NegTokenTarg> | null = null;

/**
 * @summary Encodes a(n) NegTokenTarg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegTokenTarg, encoded as an ASN.1 Element.
 */
export
function _encode_NegTokenTarg (value: NegTokenTarg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegTokenTarg) { _cached_encoder_for_NegTokenTarg = function (value: NegTokenTarg, elGetter: $.ASN1Encoder<NegTokenTarg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.negResult === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_NegTokenTarg_negResult, $.BER)(value.negResult, $.BER)),
            /* IF_ABSENT  */ ((value.supportedMech === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_MechType, $.BER)(value.supportedMech, $.BER)),
            /* IF_ABSENT  */ ((value.responseToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.responseToken, $.BER)),
            /* IF_ABSENT  */ ((value.mechListMIC === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mechListMIC, $.BER)),
            /* IF_ABSENT  */ ((value.mechTypes === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_MechTypeList, $.BER)(value.mechTypes, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NegTokenTarg(value, elGetter);
}


/* eslint-enable */
