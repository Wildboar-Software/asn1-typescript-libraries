/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CancelSessionReason, _encode_CancelSessionReason, CancelSessionReason } from "../RSPDefinitions/CancelSessionReason.ta.mjs";
// export { CancelSessionReason, CancelSessionReason_endUserRejection /* IMPORTED_LONG_NAMED_INTEGER */, endUserRejection /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_postponed /* IMPORTED_LONG_NAMED_INTEGER */, postponed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_timeout /* IMPORTED_LONG_NAMED_INTEGER */, timeout /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_pprNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, pprNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_metadataMismatch /* IMPORTED_LONG_NAMED_INTEGER */, metadataMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_loadBppExecutionError /* IMPORTED_LONG_NAMED_INTEGER */, loadBppExecutionError /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_undefinedReason /* IMPORTED_LONG_NAMED_INTEGER */, undefinedReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionReason, _encode_CancelSessionReason } from "../RSPDefinitions/CancelSessionReason.ta.mjs";


/**
 * @summary CompactEuiccCancelSessionSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactEuiccCancelSessionSigned ::= SEQUENCE {
 *     reason CancelSessionReason OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompactEuiccCancelSessionSigned {
    constructor (
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<CancelSessionReason>
    ) {}

    /**
     * @summary Restructures an object into a CompactEuiccCancelSessionSigned
     * @description
     * 
     * This takes an `object` and converts it to a `CompactEuiccCancelSessionSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactEuiccCancelSessionSigned`.
     * @returns {CompactEuiccCancelSessionSigned}
     */
    public static _from_object (_o: { [_K in keyof (CompactEuiccCancelSessionSigned)]: (CompactEuiccCancelSessionSigned)[_K] }): CompactEuiccCancelSessionSigned {
        return new CompactEuiccCancelSessionSigned(_o.reason);
    }


}

/**
 * @summary The Leading Root Component Types of CompactEuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactEuiccCancelSessionSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CompactEuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactEuiccCancelSessionSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactEuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactEuiccCancelSessionSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactEuiccCancelSessionSigned: $.ASN1Decoder<CompactEuiccCancelSessionSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactEuiccCancelSessionSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactEuiccCancelSessionSigned (el: _Element): CompactEuiccCancelSessionSigned {
    if (!_cached_decoder_for_CompactEuiccCancelSessionSigned) { _cached_decoder_for_CompactEuiccCancelSessionSigned = function (el: _Element): CompactEuiccCancelSessionSigned {
    let reason: OPTIONAL<CancelSessionReason>;
    const callbacks: $.DecodingMap = {
        "reason": (_el: _Element): void => { reason = _decode_CancelSessionReason(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompactEuiccCancelSessionSigned,
        _extension_additions_list_spec_for_CompactEuiccCancelSessionSigned,
        _root_component_type_list_2_spec_for_CompactEuiccCancelSessionSigned,
        undefined,
    );
    return new CompactEuiccCancelSessionSigned(
        reason
    );
}; }
    return _cached_decoder_for_CompactEuiccCancelSessionSigned(el);
}

let _cached_encoder_for_CompactEuiccCancelSessionSigned: $.ASN1Encoder<CompactEuiccCancelSessionSigned> | null = null;

/**
 * @summary Encodes a(n) CompactEuiccCancelSessionSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactEuiccCancelSessionSigned, encoded as an ASN.1 Element.
 */
export
function _encode_CompactEuiccCancelSessionSigned (value: CompactEuiccCancelSessionSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactEuiccCancelSessionSigned) { _cached_encoder_for_CompactEuiccCancelSessionSigned = function (value: CompactEuiccCancelSessionSigned, elGetter: $.ASN1Encoder<CompactEuiccCancelSessionSigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : _encode_CancelSessionReason(value.reason, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactEuiccCancelSessionSigned(value, elGetter);
}


/* eslint-enable */
