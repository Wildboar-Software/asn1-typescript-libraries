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
import { ProfileArgumValueList_specialProfileArgums_Item, _decode_ProfileArgumValueList_specialProfileArgums_Item, _encode_ProfileArgumValueList_specialProfileArgums_Item } from "../G/ProfileArgumValueList-specialProfileArgums-Item.ta.mjs";
import { ParamValueList, _decode_ParamValueList, _encode_ParamValueList } from "../G/ParamValueList.ta.mjs";


/**
 * @summary ProfileArgumValueList
 * @description
 *
 * Selected special VTE-profile argument values plus selected
 * VTE-parameters. Used in ASR, SNR, SPR. Each value is taken from
 * the corresponding offer. ISO/IEC 9040:1997 §3.3.49–§3.3.51;
 * ISO/IEC 9041-1:1997 §6.3.2 c, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumValueList ::= SEQUENCE {
 *     specialProfileArgums    [0] IMPLICIT SEQUENCE OF SEQUENCE {
 *         identifier INTEGER,
 *         value CHOICE {
 *             boolean BOOLEAN,
 *             integer INTEGER,
 *             string  PrintableString,
 *             oid     OBJECT IDENTIFIER
 *         }
 *     } OPTIONAL,
 *     vteParams               [1] IMPLICIT ParamValueList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileArgumValueList {
    constructor (
        /**
         * @summary `specialProfileArgums`.
         * @description
         * Chosen values for special profile arguments. ISO/IEC 9040:1997
         * §3.3.51.
         * @public
         * @readonly
         */
        readonly specialProfileArgums: OPTIONAL<ProfileArgumValueList_specialProfileArgums_Item[]>,
        /**
         * @summary `vteParams`.
         * @description
         * Chosen VTE-parameter values (CDS/CSS/DEV, delivery-control).
         * ISO/IEC 9041-1:1997 §6.3.2 c, §12.2.
         * @public
         * @readonly
         */
        readonly vteParams: OPTIONAL<ParamValueList>
    ) {}

    /**
     * @summary Restructures an object into a ProfileArgumValueList
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileArgumValueList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileArgumValueList`.
     * @returns {ProfileArgumValueList}
     */
    public static _from_object (_o: { [_K in keyof (ProfileArgumValueList)]: (ProfileArgumValueList)[_K] }): ProfileArgumValueList {
        return new ProfileArgumValueList(_o.specialProfileArgums, _o.vteParams);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileArgumValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileArgumValueList: $.ComponentSpec[] = [
    new $.ComponentSpec("specialProfileArgums", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("vteParams", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ProfileArgumValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileArgumValueList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileArgumValueList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileArgumValueList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileArgumValueList: $.ASN1Decoder<ProfileArgumValueList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumValueList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumValueList (el: _Element): ProfileArgumValueList {
    if (!_cached_decoder_for_ProfileArgumValueList) { _cached_decoder_for_ProfileArgumValueList = function (el: _Element): ProfileArgumValueList {
    let specialProfileArgums: OPTIONAL<ProfileArgumValueList_specialProfileArgums_Item[]>;
    let vteParams: OPTIONAL<ParamValueList>;
    const callbacks: $.DecodingMap = {
        "specialProfileArgums": (_el: _Element): void => { specialProfileArgums = $._decode_implicit<ProfileArgumValueList_specialProfileArgums_Item[]>(() => $._decodeSequenceOf<ProfileArgumValueList_specialProfileArgums_Item>(() => _decode_ProfileArgumValueList_specialProfileArgums_Item))(_el); },
        "vteParams": (_el: _Element): void => { vteParams = $._decode_implicit<ParamValueList>(() => _decode_ParamValueList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileArgumValueList,
        _extension_additions_list_spec_for_ProfileArgumValueList,
        _root_component_type_list_2_spec_for_ProfileArgumValueList,
        undefined,
    );
    return new ProfileArgumValueList(
        specialProfileArgums,
        vteParams
    );
}; }
    return _cached_decoder_for_ProfileArgumValueList(el);
}

let _cached_encoder_for_ProfileArgumValueList: $.ASN1Encoder<ProfileArgumValueList> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumValueList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumValueList, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumValueList (value: ProfileArgumValueList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumValueList) { _cached_encoder_for_ProfileArgumValueList = function (value: ProfileArgumValueList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.specialProfileArgums === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ProfileArgumValueList_specialProfileArgums_Item>(() => _encode_ProfileArgumValueList_specialProfileArgums_Item, $.BER), $.BER)(value.specialProfileArgums, $.BER)),
            /* IF_ABSENT  */ ((value.vteParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ParamValueList, $.BER)(value.vteParams, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileArgumValueList(value, elGetter);
}


/* eslint-enable */
