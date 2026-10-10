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
import { ProfileArgumOfferList_specialProfileArgums_Item, _decode_ProfileArgumOfferList_specialProfileArgums_Item, _encode_ProfileArgumOfferList_specialProfileArgums_Item } from "../G/ProfileArgumOfferList-specialProfileArgums-Item.ta.mjs";
import { ParamOfferList, _decode_ParamOfferList, _encode_ParamOfferList } from "../G/ParamOfferList.ta.mjs";


/**
 * @summary ProfileArgumOfferList
 * @description
 *
 * Offered special VTE-profile arguments (keyed by INTEGER from the
 * profile spec) plus offered VTE-parameters. Used in ASQ, SPQ, SNQ.
 * ISO/IEC 9040:1997 §3.3.49–§3.3.51; ISO/IEC 9041-1:1997 §6.2.2 g,
 * §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumOfferList ::= SEQUENCE {
 *     specialProfileArgums    [0] IMPLICIT SEQUENCE OF SEQUENCE {
 *         identifier INTEGER,
 *         offeredValues CHOICE {
 *             boolean [0] IMPLICIT BIT STRING { false-bit (0), true-bit (1) },
 *             integer [1] IMPLICIT IntegerOffer,
 *             string  [2] IMPLICIT SET OF PrintableString,
 *             objid   [3] IMPLICIT SET OF OBJECT IDENTIFIER
 *         }
 *     } OPTIONAL,
 *     vteParams               [1] IMPLICIT ParamOfferList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileArgumOfferList {
    constructor (
        /**
         * @summary `specialProfileArgums`.
         * @description
         * Arguments that do not map 1:1 onto VTE-parameters; identifiers
         * come from the profile specification. ISO/IEC 9040:1997 §3.3.51.
         * @public
         * @readonly
         */
        readonly specialProfileArgums: OPTIONAL<ProfileArgumOfferList_specialProfileArgums_Item[]>,
        /**
         * @summary `vteParams`.
         * @description
         * Offered display/control/device objects and delivery-control.
         * ISO/IEC 9040:1997 §3.3.50; ISO/IEC 9041-1:1997 §12.2.
         * @public
         * @readonly
         */
        readonly vteParams: OPTIONAL<ParamOfferList>
    ) {}

    /**
     * @summary Restructures an object into a ProfileArgumOfferList
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileArgumOfferList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileArgumOfferList`.
     * @returns {ProfileArgumOfferList}
     */
    public static _from_object (_o: { [_K in keyof (ProfileArgumOfferList)]: (ProfileArgumOfferList)[_K] }): ProfileArgumOfferList {
        return new ProfileArgumOfferList(_o.specialProfileArgums, _o.vteParams);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileArgumOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileArgumOfferList: $.ComponentSpec[] = [
    new $.ComponentSpec("specialProfileArgums", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("vteParams", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ProfileArgumOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileArgumOfferList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileArgumOfferList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileArgumOfferList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileArgumOfferList: $.ASN1Decoder<ProfileArgumOfferList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumOfferList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumOfferList (el: _Element): ProfileArgumOfferList {
    if (!_cached_decoder_for_ProfileArgumOfferList) { _cached_decoder_for_ProfileArgumOfferList = function (el: _Element): ProfileArgumOfferList {
    let specialProfileArgums: OPTIONAL<ProfileArgumOfferList_specialProfileArgums_Item[]>;
    let vteParams: OPTIONAL<ParamOfferList>;
    const callbacks: $.DecodingMap = {
        "specialProfileArgums": (_el: _Element): void => { specialProfileArgums = $._decode_implicit<ProfileArgumOfferList_specialProfileArgums_Item[]>(() => $._decodeSequenceOf<ProfileArgumOfferList_specialProfileArgums_Item>(() => _decode_ProfileArgumOfferList_specialProfileArgums_Item))(_el); },
        "vteParams": (_el: _Element): void => { vteParams = $._decode_implicit<ParamOfferList>(() => _decode_ParamOfferList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileArgumOfferList,
        _extension_additions_list_spec_for_ProfileArgumOfferList,
        _root_component_type_list_2_spec_for_ProfileArgumOfferList,
        undefined,
    );
    return new ProfileArgumOfferList(
        specialProfileArgums,
        vteParams
    );
}; }
    return _cached_decoder_for_ProfileArgumOfferList(el);
}

let _cached_encoder_for_ProfileArgumOfferList: $.ASN1Encoder<ProfileArgumOfferList> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumOfferList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumOfferList, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumOfferList (value: ProfileArgumOfferList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumOfferList) { _cached_encoder_for_ProfileArgumOfferList = function (value: ProfileArgumOfferList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.specialProfileArgums === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ProfileArgumOfferList_specialProfileArgums_Item>(() => _encode_ProfileArgumOfferList_specialProfileArgums_Item, $.BER), $.BER)(value.specialProfileArgums, $.BER)),
            /* IF_ABSENT  */ ((value.vteParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ParamOfferList, $.BER)(value.vteParams, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileArgumOfferList(value, elGetter);
}


/* eslint-enable */
