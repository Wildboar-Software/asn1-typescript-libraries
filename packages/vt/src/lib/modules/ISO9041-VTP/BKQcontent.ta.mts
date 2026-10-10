/* eslint-disable */
import {
    OPTIONAL,
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
import { BKQcontent_standard, _decode_BKQcontent_standard, _encode_BKQcontent_standard } from "../ISO9041-VTP/BKQcontent-standard.ta.mjs";
import { BKQcontent_profile_Item, _decode_BKQcontent_profile_Item, _encode_BKQcontent_profile_Item } from "../ISO9041-VTP/BKQcontent-profile-Item.ta.mjs";
import { BKQcontent_stuser_Item, _decode_BKQcontent_stuser_Item, _encode_BKQcontent_stuser_Item } from "../ISO9041-VTP/BKQcontent-stuser-Item.ta.mjs";


/**
 * @summary BKQcontent
 * @description
 *
 * Body of VT-BREAK-REQ and VT-BREAK-RESP. Break FU
 * (ISO/IEC 9040:1997 §10.4) is a destructive interrupt.
 * After break, context is reset-context. WAVAR-owner is a
 * service parameter of the primitive, not this PDU body.
 * ISO/IEC 9041-1:1997 §6.5, §6.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BKQcontent ::= SEQUENCE {
 *     standard [0] IMPLICIT SEQUENCE {
 *         pointer    [0] IMPLICIT G.ExplicitPointer OPTIONAL,
 *         logPointer [1] IMPLICIT G.LogExpPointer OPTIONAL
 *     } OPTIONAL,
 *     profile [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *         ptag INTEGER,
 *         pvalue OCTET STRING
 *     } OPTIONAL,
 *     stuser [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         utag INTEGER,
 *         uvalue OCTET STRING
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BKQcontent {
    constructor (
        /**
         * @summary `standard`.
         * @description
         * Display and logical pointers. ISO/IEC 9041-1:1997
         * §6.5, §6.6.
         * @public
         * @readonly
         */
        readonly standard: OPTIONAL<BKQcontent_standard>,
        /**
         * @summary `profile`.
         * @description
         * Profile-defined tagged octets (ISO/IEC 9040:1997
         * VT-information). ISO/IEC 9041-1:1997 §6.5, §6.6.
         * @public
         * @readonly
         */
        readonly profile: OPTIONAL<BKQcontent_profile_Item[]>,
        /**
         * @summary `stuser`.
         * @description
         * User-defined tagged octets (ISO/IEC 9040:1997
         * VT-information). ISO/IEC 9041-1:1997 §6.5, §6.6.
         * @public
         * @readonly
         */
        readonly stuser: OPTIONAL<BKQcontent_stuser_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a BKQcontent
     * @description
     * 
     * This takes an `object` and converts it to a `BKQcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BKQcontent`.
     * @returns {BKQcontent}
     */
    public static _from_object (_o: { [_K in keyof (BKQcontent)]: (BKQcontent)[_K] }): BKQcontent {
        return new BKQcontent(_o.standard, _o.profile, _o.stuser);
    }


}

/**
 * @summary The Leading Root Component Types of BKQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BKQcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("standard", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profile", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("stuser", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BKQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BKQcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BKQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BKQcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BKQcontent: $.ASN1Decoder<BKQcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BKQcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BKQcontent (el: _Element): BKQcontent {
    if (!_cached_decoder_for_BKQcontent) { _cached_decoder_for_BKQcontent = function (el: _Element): BKQcontent {
    let standard: OPTIONAL<BKQcontent_standard>;
    let profile: OPTIONAL<BKQcontent_profile_Item[]>;
    let stuser: OPTIONAL<BKQcontent_stuser_Item[]>;
    const callbacks: $.DecodingMap = {
        "standard": (_el: _Element): void => { standard = $._decode_implicit<BKQcontent_standard>(() => _decode_BKQcontent_standard)(_el); },
        "profile": (_el: _Element): void => { profile = $._decode_implicit<BKQcontent_profile_Item[]>(() => $._decodeSequenceOf<BKQcontent_profile_Item>(() => _decode_BKQcontent_profile_Item))(_el); },
        "stuser": (_el: _Element): void => { stuser = $._decode_implicit<BKQcontent_stuser_Item[]>(() => $._decodeSequenceOf<BKQcontent_stuser_Item>(() => _decode_BKQcontent_stuser_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BKQcontent,
        _extension_additions_list_spec_for_BKQcontent,
        _root_component_type_list_2_spec_for_BKQcontent,
        undefined,
    );
    return new BKQcontent(
        standard,
        profile,
        stuser
    );
}; }
    return _cached_decoder_for_BKQcontent(el);
}

let _cached_encoder_for_BKQcontent: $.ASN1Encoder<BKQcontent> | null = null;

/**
 * @summary Encodes a(n) BKQcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BKQcontent, encoded as an ASN.1 Element.
 */
export
function _encode_BKQcontent (value: BKQcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BKQcontent) { _cached_encoder_for_BKQcontent = function (value: BKQcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.standard === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BKQcontent_standard, $.BER)(value.standard, $.BER)),
            /* IF_ABSENT  */ ((value.profile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<BKQcontent_profile_Item>(() => _encode_BKQcontent_profile_Item, $.BER), $.BER)(value.profile, $.BER)),
            /* IF_ABSENT  */ ((value.stuser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<BKQcontent_stuser_Item>(() => _encode_BKQcontent_stuser_Item, $.BER), $.BER)(value.stuser, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BKQcontent(value, elGetter);
}


/* eslint-enable */
