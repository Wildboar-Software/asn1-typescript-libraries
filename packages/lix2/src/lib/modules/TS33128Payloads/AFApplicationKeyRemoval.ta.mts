/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { AFKeyRemovalCause, _decode_AFKeyRemovalCause, _encode_AFKeyRemovalCause, _enum_for_AFKeyRemovalCause } from "../TS33128Payloads/AFKeyRemovalCause.ta.mjs";
// export { AFKeyRemovalCause, _enum_for_AFKeyRemovalCause, AFKeyRemovalCause_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AFKeyRemovalCause_keyExpiry /* IMPORTED_LONG_ENUMERATION_ITEM */, keyExpiry /* IMPORTED_SHORT_ENUMERATION_ITEM */, AFKeyRemovalCause_applicationSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, applicationSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AFKeyRemovalCause, _encode_AFKeyRemovalCause } from "../TS33128Payloads/AFKeyRemovalCause.ta.mjs";


/**
 * @summary AFApplicationKeyRemoval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFApplicationKeyRemoval ::= SEQUENCE
 * {
 *     aFID                  [1] AFID,
 *     aKID                  [2] NAI,
 *     removalCause          [3] AFKeyRemovalCause
 * }
 * ```
 * 
 * @class
 */
export
class AFApplicationKeyRemoval {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `removalCause`.
         * @public
         * @readonly
         */
        readonly removalCause: AFKeyRemovalCause
    ) {}

    /**
     * @summary Restructures an object into a AFApplicationKeyRemoval
     * @description
     * 
     * This takes an `object` and converts it to a `AFApplicationKeyRemoval`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFApplicationKeyRemoval`.
     * @returns {AFApplicationKeyRemoval}
     */
    public static _from_object (_o: { [_K in keyof (AFApplicationKeyRemoval)]: (AFApplicationKeyRemoval)[_K] }): AFApplicationKeyRemoval {
        return new AFApplicationKeyRemoval(_o.aFID, _o.aKID, _o.removalCause);
    }

        /**
         * @summary The enum used as the type of the component `removalCause`
         * @public
         * @static
         */

    public static _enum_for_removalCause = _enum_for_AFKeyRemovalCause;
}

/**
 * @summary The Leading Root Component Types of AFApplicationKeyRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFApplicationKeyRemoval: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("removalCause", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AFApplicationKeyRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFApplicationKeyRemoval: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFApplicationKeyRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFApplicationKeyRemoval: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFApplicationKeyRemoval: $.ASN1Decoder<AFApplicationKeyRemoval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFApplicationKeyRemoval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFApplicationKeyRemoval (el: _Element): AFApplicationKeyRemoval {
    if (!_cached_decoder_for_AFApplicationKeyRemoval) { _cached_decoder_for_AFApplicationKeyRemoval = function (el: _Element): AFApplicationKeyRemoval {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AFApplicationKeyRemoval contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFID";
    sequence[1].name = "aKID";
    sequence[2].name = "removalCause";
    let aFID!: AFID;
    let aKID!: NAI;
    let removalCause!: AFKeyRemovalCause;
    aFID = $._decode_implicit<AFID>(() => _decode_AFID)(sequence[0]);
    aKID = $._decode_implicit<NAI>(() => _decode_NAI)(sequence[1]);
    removalCause = $._decode_implicit<AFKeyRemovalCause>(() => _decode_AFKeyRemovalCause)(sequence[2]);
    return new AFApplicationKeyRemoval(
        aFID,
        aKID,
        removalCause,

    );
}; }
    return _cached_decoder_for_AFApplicationKeyRemoval(el);
}

let _cached_encoder_for_AFApplicationKeyRemoval: $.ASN1Encoder<AFApplicationKeyRemoval> | null = null;

/**
 * @summary Encodes a(n) AFApplicationKeyRemoval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFApplicationKeyRemoval, encoded as an ASN.1 Element.
 */
export
function _encode_AFApplicationKeyRemoval (value: AFApplicationKeyRemoval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFApplicationKeyRemoval) { _cached_encoder_for_AFApplicationKeyRemoval = function (value: AFApplicationKeyRemoval, elGetter: $.ASN1Encoder<AFApplicationKeyRemoval>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AFKeyRemovalCause, $.BER)(value.removalCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFApplicationKeyRemoval(value, elGetter);
}


/* eslint-enable */
