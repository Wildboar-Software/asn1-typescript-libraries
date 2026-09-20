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
import { NameConstraint, _enum_for_NameConstraint, _decode_NameConstraint, _encode_NameConstraint } from "../DFRAbstractService/NameConstraint.ta.mjs";
import { VersionConstraint, _enum_for_VersionConstraint, _decode_VersionConstraint, _encode_VersionConstraint } from "../DFRAbstractService/VersionConstraint.ta.mjs";


/**
 * @summary ConstraintsType
 * @description
 *
 * Store-wide uniqueness rules reported at bind if configuration was requested.
 * ISO/IEC 10166-1:1991 §7.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConstraintsType ::= SEQUENCE {
 *     name-constraint     [0] NameConstraint,
 *     version-constraint  [1] VersionConstraint
 * }
 * ```
 * 
 * @class
 */
export
class ConstraintsType {
    constructor (
        /**
         * @summary `name_constraint`.
         * @description
         *
         * Uniqueness rule for `dfr-title`.
         * @public
         * @readonly
         */
        readonly name_constraint: NameConstraint,
        /**
         * @summary `version_constraint`.
         * @description
         *
         * Uniqueness rule for `version-name`.
         * @public
         * @readonly
         */
        readonly version_constraint: VersionConstraint
    ) {}

    /**
     * @summary Restructures an object into a ConstraintsType
     * @description
     * 
     * This takes an `object` and converts it to a `ConstraintsType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConstraintsType`.
     * @returns {ConstraintsType}
     */
    public static _from_object (_o: { [_K in keyof (ConstraintsType)]: (ConstraintsType)[_K] }): ConstraintsType {
        return new ConstraintsType(_o.name_constraint, _o.version_constraint);
    }

        /**
         * @summary The enum used as the type of the component `name_constraint`
         * @public
         * @static
         */

    public static _enum_for_name_constraint = _enum_for_NameConstraint;        /**
         * @summary The enum used as the type of the component `version_constraint`
         * @public
         * @static
         */

    public static _enum_for_version_constraint = _enum_for_VersionConstraint;
}

/**
 * @summary The Leading Root Component Types of ConstraintsType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConstraintsType: $.ComponentSpec[] = [
    new $.ComponentSpec("name-constraint", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("version-constraint", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConstraintsType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConstraintsType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConstraintsType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConstraintsType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConstraintsType: $.ASN1Decoder<ConstraintsType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConstraintsType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConstraintsType (el: _Element): ConstraintsType {
    if (!_cached_decoder_for_ConstraintsType) { _cached_decoder_for_ConstraintsType = function (el: _Element): ConstraintsType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ConstraintsType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name-constraint";
    sequence[1].name = "version-constraint";
    let name_constraint!: NameConstraint;
    let version_constraint!: VersionConstraint;
    name_constraint = $._decode_implicit<NameConstraint>(() => _decode_NameConstraint)(sequence[0]);
    version_constraint = $._decode_implicit<VersionConstraint>(() => _decode_VersionConstraint)(sequence[1]);
    return new ConstraintsType(
        name_constraint,
        version_constraint,

    );
}; }
    return _cached_decoder_for_ConstraintsType(el);
}

let _cached_encoder_for_ConstraintsType: $.ASN1Encoder<ConstraintsType> | null = null;

/**
 * @summary Encodes a(n) ConstraintsType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConstraintsType, encoded as an ASN.1 Element.
 */
export
function _encode_ConstraintsType (value: ConstraintsType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConstraintsType) { _cached_encoder_for_ConstraintsType = function (value: ConstraintsType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NameConstraint, $.BER)(value.name_constraint, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_VersionConstraint, $.BER)(value.version_constraint, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConstraintsType(value, elGetter);
}


/* eslint-enable */
