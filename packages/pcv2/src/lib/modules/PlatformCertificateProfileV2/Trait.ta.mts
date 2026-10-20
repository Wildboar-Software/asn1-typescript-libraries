/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    IA5String,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { urimax } from "../PlatformCertificateProfileV2/urimax.va.mjs";


/**
 * @summary Trait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trait ::= SEQUENCE {
 *     traitId         TRAIT.&id({TraitSet}), -- Specifies the traitValue encoding
 *     traitCategory   OBJECT IDENTIFIER, -- Identifies the information category contained in traitValue
 *     traitRegistry   OBJECT IDENTIFIER, -- Identifies the registry used to match against the traitValue
 *     description     [0] IMPLICIT UTF8String (SIZE (1..strmax)) OPTIONAL,
 *     descriptionURI  [1] IMPLICIT IA5String (SIZE (1..urimax)) OPTIONAL,
 *     traitValue      OCTET STRING (CONTAINING TRAIT.&TraitValueType({TraitSet}{@traitId}) ENCODED BY der)
 * }
 * ```
 * 
 * @class
 */
export
class Trait {
    /**
     * @summary `traitId`.
     * @public
     * @readonly
     */
    readonly traitId: OBJECT_IDENTIFIER;
    /**
     * @summary `traitCategory`.
     * @public
     * @readonly
     */
    readonly traitCategory: OBJECT_IDENTIFIER;
    /**
     * @summary `traitRegistry`.
     * @public
     * @readonly
     */
    readonly traitRegistry: OBJECT_IDENTIFIER;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<UTF8String>;
    /**
     * @summary `descriptionURI`.
     * @public
     * @readonly
     */
    readonly descriptionURI: OPTIONAL<IA5String>;
    /**
     * @summary `traitValue`.
     * @public
     * @readonly
     */
    readonly traitValue: OCTET_STRING;

    constructor (
        traitId: OBJECT_IDENTIFIER,
        traitCategory: OBJECT_IDENTIFIER,
        traitRegistry: OBJECT_IDENTIFIER,
        description: OPTIONAL<UTF8String>,
        descriptionURI: OPTIONAL<IA5String>,
        traitValue: OCTET_STRING
    ) {
        this.traitId = traitId;
        this.traitCategory = traitCategory;
        this.traitRegistry = traitRegistry;
        this.description = description;
        this.descriptionURI = descriptionURI;
        this.traitValue = traitValue;
        if (description !== undefined && (description.length < 1 || description.length > strmax)) {
            throw new ASN1SizeError("Trait.description violates SIZE (1..strmax)");
        }
        if (descriptionURI !== undefined && (descriptionURI.length < 1 || descriptionURI.length > urimax)) {
            throw new ASN1SizeError("Trait.descriptionURI violates SIZE (1..urimax)");
        }
    }

    /**
     * @summary Restructures an object into a Trait
     * @description
     * 
     * This takes an `object` and converts it to a `Trait`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Trait`.
     * @returns {Trait}
     */
    public static _from_object (_o: { [_K in keyof (Trait)]: (Trait)[_K] }): Trait {
        return new Trait(_o.traitId, _o.traitCategory, _o.traitRegistry, _o.description, _o.descriptionURI, _o.traitValue);
    }


}

/**
 * @summary The Leading Root Component Types of Trait
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Trait: $.ComponentSpec[] = [
    new $.ComponentSpec("traitId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("traitCategory", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("traitRegistry", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("descriptionURI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("traitValue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Trait
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Trait: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Trait
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Trait: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Trait: $.ASN1Decoder<Trait> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Trait
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Trait (el: _Element): Trait {
    if (!_cached_decoder_for_Trait) { _cached_decoder_for_Trait = function (el: _Element): Trait {
    let traitId!: OBJECT_IDENTIFIER;
    let traitCategory!: OBJECT_IDENTIFIER;
    let traitRegistry!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<UTF8String>;
    let descriptionURI: OPTIONAL<IA5String>;
    let traitValue!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "traitId": (_el: _Element): void => { traitId = $._decodeObjectIdentifier(_el); },
        "traitCategory": (_el: _Element): void => { traitCategory = $._decodeObjectIdentifier(_el); },
        "traitRegistry": (_el: _Element): void => { traitRegistry = $._decodeObjectIdentifier(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "descriptionURI": (_el: _Element): void => { descriptionURI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "traitValue": (_el: _Element): void => { traitValue = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Trait,
        _extension_additions_list_spec_for_Trait,
        _root_component_type_list_2_spec_for_Trait,
        undefined,
    );
    return new Trait(
        traitId,
        traitCategory,
        traitRegistry,
        description,
        descriptionURI,
        traitValue
    );
}; }
    return _cached_decoder_for_Trait(el);
}

let _cached_encoder_for_Trait: $.ASN1Encoder<Trait> | null = null;

/**
 * @summary Encodes a(n) Trait into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trait, encoded as an ASN.1 Element.
 */
export
function _encode_Trait (value: Trait, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Trait) { _cached_encoder_for_Trait = function (value: Trait): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.traitId, $.BER));
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.traitCategory, $.BER));
    _components.push(/* REQUIRED   */ $._encodeObjectIdentifier(value.traitRegistry, $.BER));
    if (value.description !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.description, $.BER));
    }
    if (value.descriptionURI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.descriptionURI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encodeOctetString(value.traitValue, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Trait(value, elGetter);
}


/* eslint-enable */
