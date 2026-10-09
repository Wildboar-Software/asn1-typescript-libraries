/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../RecordSyntax-explain/AttributeType.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary AttributeSetInfo
 * @description
 * 
 * Description of one attribute set. One record per set the server supports. Not
 * specific to a database; per-database search behavior is AttributeDetails.
 * Search ExplainCategory `AttributeSetInfo` with AttributeSetOID as the key.
 * The description should match the published definition. The server may omit
 * attributes it does not support under any circumstances. `attributes` is
 * mandatory in a full record. ANSI/NISO Z39.50-2003 §3.2.10.1.1, §3.2.10.3.6;
 * REC.1 Comment 1.
 * 
 * When this record describes exp-1, that set has a single Use type and imports
 * bib-1 Relation, Position, Structure, Truncation, and Completeness, identified
 * by the exp-1 object identifier. A server supporting Explain should support
 * relation `equal`, position `any position in field`, and structure `key`. If
 * it searches date ranges, it should also support one or more of `less than`,
 * `less than or equal`, `greater than`, and `greater or equal`. Clients should
 * not expect truncation, completeness, or the other bib-1 relation, position,
 * and structure values, though a server may offer them. ANSI/NISO Z39.50-2003
 * §3.2.10.1; ATR.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetInfo ::= SEQUENCE {
 *     commonInfo      [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     attributeSet    [1] IMPLICIT AttributeSetId,
 *     -- Non-key brief elements follow:
 *     name            [2] IMPLICIT InternationalString,
 *     -- Non-brief elements follow:
 *     attributes      [3] IMPLICIT SEQUENCE OF AttributeType OPTIONAL,
 *     -- Mandatory in full record
 *     description     [4] IMPLICIT HumanString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AttributeSetInfo {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates, language, and other information about this Explain record.
     * otherInfo is omitted from element set `B`. REC.1 Comment 1; ANSI/NISO
     * Z39.50-2003 §3.2.10.3.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `attributeSet`.
     * @description
     * Brief. Key. Object identifier of the attribute set. Search with Use
     * AttributeSetOID. For version 2, prefer the oid as a dotted character
     * string; for version 3, as an OBJECT IDENTIFIER. ATR.1 note 4; ANSI/NISO
     * Z39.50-2003 §3.2.10.3.6.
     * @public
     * @readonly
     */
    readonly attributeSet: AttributeSetId;
    /**
     * @summary `name`.
     * @description
     * Brief. Name of the attribute set. ANSI/NISO Z39.50-2003 §3.2.10.3.6.
     * @public
     * @readonly
     */
    readonly name: InternationalString;
    /**
     * @summary `attributes`.
     * @description
     * Non-brief. Mandatory in a full record. For each attribute type, its name,
     * description, integer value, and values. Unsupported attributes may be
     * omitted. Comment 1; ANSI/NISO Z39.50-2003 §3.2.10.3.6.
     * @public
     * @readonly
     */
    readonly attributes: OPTIONAL<AttributeType[]>;
    /**
     * @summary `description`.
     * @description
     * Non-brief. Human-readable description of the attribute set. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.6.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        attributeSet: AttributeSetId,
        name: InternationalString,
        attributes: OPTIONAL<AttributeType[]>,
        description: OPTIONAL<HumanString>
    ) {
        this.commonInfo = commonInfo;
        this.attributeSet = attributeSet;
        this.name = name;
        this.attributes = attributes;
        this.description = description;
    }

    /**
     * @summary Restructures an object into a AttributeSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSetInfo`.
     * @returns {AttributeSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (AttributeSetInfo)]: (AttributeSetInfo)[_K] }): AttributeSetInfo {
        return new AttributeSetInfo(_o.commonInfo, _o.attributeSet, _o.name, _o.attributes, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributeSet", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeSetInfo: $.ASN1Decoder<AttributeSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeSetInfo (el: _Element): AttributeSetInfo {
    if (!_cached_decoder_for_AttributeSetInfo) { _cached_decoder_for_AttributeSetInfo = function (el: _Element): AttributeSetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let attributeSet!: AttributeSetId;
    let name!: InternationalString;
    let attributes: OPTIONAL<AttributeType[]>;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<AttributeType[]>(() => $._decodeSequenceOf<AttributeType>(() => _decode_AttributeType))(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeSetInfo,
        _extension_additions_list_spec_for_AttributeSetInfo,
        _root_component_type_list_2_spec_for_AttributeSetInfo,
        undefined,
    );
    return new AttributeSetInfo(
        commonInfo,
        attributeSet,
        name,
        attributes,
        description
    );
}; }
    return _cached_decoder_for_AttributeSetInfo(el);
}

let _cached_encoder_for_AttributeSetInfo: $.ASN1Encoder<AttributeSetInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeSetInfo (value: AttributeSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeSetInfo) { _cached_encoder_for_AttributeSetInfo = function (value: AttributeSetInfo, elGetter: $.ASN1Encoder<AttributeSetInfo>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    if (value.attributes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attributes, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AttributeSetInfo(value, elGetter);
}


/* eslint-enable */
