/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorCode, _decode_ErrorCode, _encode_ErrorCode } from "../G/ErrorCode.ta.mjs";
// export { ErrorCode, ErrorCode_collisionDetected /* IMPORTED_LONG_NAMED_INTEGER */, collisionDetected /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_vteParamNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, vteParamNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_vteParamCombNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, vteParamCombNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_vteIncomplete /* IMPORTED_LONG_NAMED_INTEGER */, vteIncomplete /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_vteProfileNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, vteProfileNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_vtModeNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, vtModeNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorCode_lengthExceeded /* IMPORTED_LONG_NAMED_INTEGER */, lengthExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ErrorCode, _encode_ErrorCode } from "../G/ErrorCode.ta.mjs";


/**
 * @summary Reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason ::= SEQUENCE {
 *     userA    [0] IMPLICIT PrintableString OPTIONAL,
 *     userB    [1] IMPLICIT ErrorCode OPTIONAL,
 *     provider [2] IMPLICIT ErrorCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Reason {
    constructor (
        /**
         * @summary `userA`.
         * @public
         * @readonly
         */
        readonly userA: OPTIONAL<PrintableString>,
        /**
         * @summary `userB`.
         * @public
         * @readonly
         */
        readonly userB: OPTIONAL<ErrorCode>,
        /**
         * @summary `provider`.
         * @public
         * @readonly
         */
        readonly provider: OPTIONAL<ErrorCode>
    ) {}

    /**
     * @summary Restructures an object into a Reason
     * @description
     * 
     * This takes an `object` and converts it to a `Reason`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Reason`.
     * @returns {Reason}
     */
    public static _from_object (_o: { [_K in keyof (Reason)]: (Reason)[_K] }): Reason {
        return new Reason(_o.userA, _o.userB, _o.provider);
    }


}

/**
 * @summary The Leading Root Component Types of Reason
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Reason: $.ComponentSpec[] = [
    new $.ComponentSpec("userA", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userB", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("provider", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Reason
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Reason: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Reason
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Reason: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Reason: $.ASN1Decoder<Reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reason (el: _Element): Reason {
    if (!_cached_decoder_for_Reason) { _cached_decoder_for_Reason = function (el: _Element): Reason {
    let userA: OPTIONAL<PrintableString>;
    let userB: OPTIONAL<ErrorCode>;
    let provider: OPTIONAL<ErrorCode>;
    const callbacks: $.DecodingMap = {
        "userA": (_el: _Element): void => { userA = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "userB": (_el: _Element): void => { userB = $._decode_implicit<ErrorCode>(() => _decode_ErrorCode)(_el); },
        "provider": (_el: _Element): void => { provider = $._decode_implicit<ErrorCode>(() => _decode_ErrorCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Reason,
        _extension_additions_list_spec_for_Reason,
        _root_component_type_list_2_spec_for_Reason,
        undefined,
    );
    return new Reason(
        userA,
        userB,
        provider
    );
}; }
    return _cached_decoder_for_Reason(el);
}

let _cached_encoder_for_Reason: $.ASN1Encoder<Reason> | null = null;

/**
 * @summary Encodes a(n) Reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reason, encoded as an ASN.1 Element.
 */
export
function _encode_Reason (value: Reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reason) { _cached_encoder_for_Reason = function (value: Reason): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.userA, $.BER)),
            /* IF_ABSENT  */ ((value.userB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ErrorCode, $.BER)(value.userB, $.BER)),
            /* IF_ABSENT  */ ((value.provider === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ErrorCode, $.BER)(value.provider, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Reason(value, elGetter);
}


/* eslint-enable */
