/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TokenAction, _decode_TokenAction, _encode_TokenAction, _enum_for_TokenAction } from "../MmsHI2Operations/TokenAction.ta.mjs";
// export { TokenAction, _enum_for_TokenAction, TokenAction_addToken /* IMPORTED_LONG_ENUMERATION_ITEM */, addToken /* IMPORTED_SHORT_ENUMERATION_ITEM */, TokenAction_removeToken /* IMPORTED_LONG_ENUMERATION_ITEM */, removeToken /* IMPORTED_SHORT_ENUMERATION_ITEM */, TokenAction_filterToken /* IMPORTED_LONG_ENUMERATION_ITEM */, filterToken /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TokenAction, _encode_TokenAction } from "../MmsHI2Operations/TokenAction.ta.mjs";
import { type EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary MMFlags
 * @description
 * 
 * A keyword action and the keyword it applies to, for a stored MM.
 * 
 * On an MMBox description, include this when at least one keyword is associated
 * with the MM. It may carry every keyword. Omit it when the MM has none (table
 * 15.3.6.2.2.16).
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMFlags ::= SEQUENCE
 * {
 *     tokenAction        [1] TokenAction,
 *     mmFlagkeywords    [2] EncodedString
 * }
 * ```
 * 
 * @class
 */
export
class MMFlags {
    /**
     * @summary `tokenAction`.
     * @description
     * 
     * Whether the keyword is added, removed, or filtered. Table 15.3.6.1.2
     * describes add and remove.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly tokenAction: TokenAction;
    /**
     * @summary `mmFlagkeywords`.
     * @description
     * 
     * The keyword to add or remove, or the keywords associated with the MM. An
     * MMBox description may convey every keyword of the MM (table
     * 15.3.6.2.2.16).
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly mmFlagkeywords: EncodedString;

    constructor (
        tokenAction: TokenAction,
        mmFlagkeywords: EncodedString
    ) {
        this.tokenAction = tokenAction;
        this.mmFlagkeywords = mmFlagkeywords;
    }

    /**
     * @summary Restructures an object into a MMFlags
     * @description
     * 
     * This takes an `object` and converts it to a `MMFlags`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMFlags`.
     * @returns {MMFlags}
     */
    public static _from_object (_o: { [_K in keyof (MMFlags)]: (MMFlags)[_K] }): MMFlags {
        return new MMFlags(_o.tokenAction, _o.mmFlagkeywords);
    }

        /**
         * @summary The enum used as the type of the component `tokenAction`
         * @public
         * @static
         */

    public static _enum_for_tokenAction = _enum_for_TokenAction;
}

/**
 * @summary The Leading Root Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMFlags: $.ComponentSpec[] = [
    new $.ComponentSpec("tokenAction", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mmFlagkeywords", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMFlags: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMFlags
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMFlags: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMFlags: $.ASN1Decoder<MMFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMFlags (el: _Element): MMFlags {
    if (!_cached_decoder_for_MMFlags) { _cached_decoder_for_MMFlags = function (el: _Element): MMFlags {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMFlags contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tokenAction";
    sequence[1].name = "mmFlagkeywords";
    let tokenAction!: TokenAction;
    let mmFlagkeywords!: EncodedString;
    tokenAction = $._decode_implicit<TokenAction>(() => _decode_TokenAction)(sequence[0]);
    mmFlagkeywords = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(sequence[1]);
    return new MMFlags(
        tokenAction,
        mmFlagkeywords,

    );
}; }
    return _cached_decoder_for_MMFlags(el);
}

let _cached_encoder_for_MMFlags: $.ASN1Encoder<MMFlags> | null = null;

/**
 * @summary Encodes a(n) MMFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMFlags, encoded as an ASN.1 Element.
 */
export
function _encode_MMFlags (value: MMFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMFlags) { _cached_encoder_for_MMFlags = function (value: MMFlags, elGetter: $.ASN1Encoder<MMFlags>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TokenAction, $.BER)(value.tokenAction, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_EncodedString, $.BER)(value.mmFlagkeywords, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MMFlags(value, elGetter);
}


/* eslint-enable */
