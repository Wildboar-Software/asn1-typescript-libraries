/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { ElementSetName, _decode_ElementSetName, _encode_ElementSetName } from "../Z39-50-APDU-2001/ElementSetName.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { PerElementDetails, _decode_PerElementDetails, _encode_PerElementDetails } from "../RecordSyntax-explain/PerElementDetails.ta.mjs";


/**
 * @summary ElementSetDetails
 * @description
 * 
 * One element set for one record syntax for one database. There is one record
 * for each such triple. Search ExplainCategory `ElementSetDetails`. With
 * RecordSyntaxOID and DatabaseName, the result is the element set names for
 * that syntax and database. With only ElementSetName, several records may
 * match, because the name is repeated per syntax and database. All three keys
 * together select one record. The schema may be private to the server. Its
 * abstract structure and tag sets being in the Explain database does not mean
 * complex retrieval specification is supported. `detailsPerElement` is
 * mandatory in a full record. ANSI/NISO Z39.50-2003 §3.2.10.1.1, §3.2.10.3.11;
 * REC.1 Comment 11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementSetDetails ::= SEQUENCE {
 *     -- see comment 11
 *     commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     databaseName        [1] IMPLICIT DatabaseName,
 *     elementSetName      [2] IMPLICIT ElementSetName,
 *     recordSyntax        [3] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-key Brief elements follow:
 *     schema              [4] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-brief elements follow:
 *     description         [5] IMPLICIT HumanString OPTIONAL,
 *     detailsPerElement   [6] IMPLICIT SEQUENCE OF PerElementDetails OPTIONAL
 *     -- mandatory in full record
 * }
 * ```
 * 
 * @class
 */
export
class ElementSetDetails {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates, language, and other information about this Explain record.
     * otherInfo is omitted from element set `B`. REC.1 Comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `databaseName`.
     * @description
     * Brief. Key. Database this element set belongs to. ANSI/NISO Z39.50-2003
     * §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly databaseName: DatabaseName;
    /**
     * @summary `elementSetName`.
     * @description
     * Brief. Key. Element set name described by this record. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly elementSetName: ElementSetName;
    /**
     * @summary `recordSyntax`.
     * @description
     * Brief. Key. Record syntax this element set belongs to. Search with Use
     * RecordSyntaxOID. For version 2, prefer the oid as a dotted character
     * string; for version 3, as an OBJECT IDENTIFIER. ATR.1 note 4; ANSI/NISO
     * Z39.50-2003 §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly recordSyntax: OBJECT_IDENTIFIER;
    /**
     * @summary `schema`.
     * @description
     * Brief, but not a key. Schema for which this element set is defined. It
     * may be private. Comment 11; ANSI/NISO Z39.50-2003 §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly schema: OBJECT_IDENTIFIER;
    /**
     * @summary `description`.
     * @description
     * Non-brief. Human-readable description of the element set. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `detailsPerElement`.
     * @description
     * Non-brief. Mandatory in a full record. For each element, the same
     * information RetrievalRecordDetails gives per element. ANSI/NISO
     * Z39.50-2003 §3.2.10.3.11.
     * @public
     * @readonly
     */
    readonly detailsPerElement: OPTIONAL<PerElementDetails[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        databaseName: DatabaseName,
        elementSetName: ElementSetName,
        recordSyntax: OBJECT_IDENTIFIER,
        schema: OBJECT_IDENTIFIER,
        description: OPTIONAL<HumanString>,
        detailsPerElement: OPTIONAL<PerElementDetails[]>
    ) {
        this.commonInfo = commonInfo;
        this.databaseName = databaseName;
        this.elementSetName = elementSetName;
        this.recordSyntax = recordSyntax;
        this.schema = schema;
        this.description = description;
        this.detailsPerElement = detailsPerElement;
    }

    /**
     * @summary Restructures an object into a ElementSetDetails
     * @description
     * 
     * This takes an `object` and converts it to a `ElementSetDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ElementSetDetails`.
     * @returns {ElementSetDetails}
     */
    public static _from_object (_o: { [_K in keyof (ElementSetDetails)]: (ElementSetDetails)[_K] }): ElementSetDetails {
        return new ElementSetDetails(_o.commonInfo, _o.databaseName, _o.elementSetName, _o.recordSyntax, _o.schema, _o.description, _o.detailsPerElement);
    }


}

/**
 * @summary The Leading Root Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("elementSetName", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordSyntax", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("schema", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("detailsPerElement", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ElementSetDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ElementSetDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ElementSetDetails: $.ASN1Decoder<ElementSetDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementSetDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementSetDetails (el: _Element): ElementSetDetails {
    if (!_cached_decoder_for_ElementSetDetails) { _cached_decoder_for_ElementSetDetails = function (el: _Element): ElementSetDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let elementSetName!: ElementSetName;
    let recordSyntax!: OBJECT_IDENTIFIER;
    let schema!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<HumanString>;
    let detailsPerElement: OPTIONAL<PerElementDetails[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "elementSetName": (_el: _Element): void => { elementSetName = $._decode_implicit<ElementSetName>(() => _decode_ElementSetName)(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "detailsPerElement": (_el: _Element): void => { detailsPerElement = $._decode_implicit<PerElementDetails[]>(() => $._decodeSequenceOf<PerElementDetails>(() => _decode_PerElementDetails))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElementSetDetails,
        _extension_additions_list_spec_for_ElementSetDetails,
        _root_component_type_list_2_spec_for_ElementSetDetails,
        undefined,
    );
    return new ElementSetDetails(
        commonInfo,
        databaseName,
        elementSetName,
        recordSyntax,
        schema,
        description,
        detailsPerElement
    );
}; }
    return _cached_decoder_for_ElementSetDetails(el);
}

let _cached_encoder_for_ElementSetDetails: $.ASN1Encoder<ElementSetDetails> | null = null;

/**
 * @summary Encodes a(n) ElementSetDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementSetDetails, encoded as an ASN.1 Element.
 */
export
function _encode_ElementSetDetails (value: ElementSetDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementSetDetails) { _cached_encoder_for_ElementSetDetails = function (value: ElementSetDetails, elGetter: $.ASN1Encoder<ElementSetDetails>): _Element {
    const _components: _Element[] = new Array(7);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ElementSetName, $.BER)(value.elementSetName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.detailsPerElement !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<PerElementDetails>(() => _encode_PerElementDetails, $.BER), $.BER)(value.detailsPerElement, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ElementSetDetails(value, elGetter);
}


/* eslint-enable */
