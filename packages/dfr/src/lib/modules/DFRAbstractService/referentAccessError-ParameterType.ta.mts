/* eslint-disable */
import {
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
import { referentAccessError_ParameterType_entry, _decode_referentAccessError_ParameterType_entry, _encode_referentAccessError_ParameterType_entry } from "../DFRAbstractService/referentAccessError-ParameterType-entry.ta.mjs";
// export { referentAccessError_ParameterType_entry, _decode_referentAccessError_ParameterType_entry, _encode_referentAccessError_ParameterType_entry } from "../DFRAbstractService/referentAccessError-ParameterType-entry.ta.mjs";
import { ReferentAccessProblem, _enum_for_ReferentAccessProblem, _decode_ReferentAccessProblem, _encode_ReferentAccessProblem } from "../DFRAbstractService/ReferentAccessProblem.ta.mjs";
// export { ReferentAccessProblem, _enum_for_ReferentAccessProblem, ReferentAccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, inappropriate_object_class /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_insufficient_access_rights /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficient_access_rights /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved_by_a_user /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_referent_no_longer_exists /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_no_longer_exists /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_referent_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reference_content_empty /* IMPORTED_LONG_ENUMERATION_ITEM */, reference_content_empty /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferentAccessProblem, _encode_ReferentAccessProblem } from "../DFRAbstractService/ReferentAccessProblem.ta.mjs";


/**
 * @summary referentAccessError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * referentAccessError-ParameterType ::= SEQUENCE {
 *         entry   [0] CHOICE {
 *             dfr-entry   [0] DfrEntryName,
 *             dor         [1] NULL
 *         },
 *         problem [1] ReferentAccessProblem
 *     }
 * ```
 * 
 * @class
 */
export
class referentAccessError_ParameterType {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: referentAccessError_ParameterType_entry,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ReferentAccessProblem
    ) {}

    /**
     * @summary Restructures an object into a referentAccessError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `referentAccessError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `referentAccessError_ParameterType`.
     * @returns {referentAccessError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (referentAccessError_ParameterType)]: (referentAccessError_ParameterType)[_K] }): referentAccessError_ParameterType {
        return new referentAccessError_ParameterType(_o.entry, _o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_ReferentAccessProblem;
}

/**
 * @summary The Leading Root Component Types of referentAccessError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_referentAccessError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of referentAccessError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_referentAccessError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of referentAccessError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_referentAccessError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_referentAccessError_ParameterType: $.ASN1Decoder<referentAccessError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) referentAccessError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_referentAccessError_ParameterType (el: _Element): referentAccessError_ParameterType {
    if (!_cached_decoder_for_referentAccessError_ParameterType) { _cached_decoder_for_referentAccessError_ParameterType = function (el: _Element): referentAccessError_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("referentAccessError-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "problem";
    let entry!: referentAccessError_ParameterType_entry;
    let problem!: ReferentAccessProblem;
    entry = $._decode_explicit<referentAccessError_ParameterType_entry>(() => _decode_referentAccessError_ParameterType_entry)(sequence[0]);
    problem = $._decode_implicit<ReferentAccessProblem>(() => _decode_ReferentAccessProblem)(sequence[1]);
    return new referentAccessError_ParameterType(
        entry,
        problem,

    );
}; }
    return _cached_decoder_for_referentAccessError_ParameterType(el);
}

let _cached_encoder_for_referentAccessError_ParameterType: $.ASN1Encoder<referentAccessError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) referentAccessError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The referentAccessError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_referentAccessError_ParameterType (value: referentAccessError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_referentAccessError_ParameterType) { _cached_encoder_for_referentAccessError_ParameterType = function (value: referentAccessError_ParameterType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_referentAccessError_ParameterType_entry, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReferentAccessProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_referentAccessError_ParameterType(value, elGetter);
}


/* eslint-enable */
