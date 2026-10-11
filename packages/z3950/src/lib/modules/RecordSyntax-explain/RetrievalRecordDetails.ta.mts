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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { PerElementDetails, _decode_PerElementDetails, _encode_PerElementDetails } from "../RecordSyntax-explain/PerElementDetails.ta.mjs";


/**
 * @summary RetrievalRecordDetails
 * @description
 * The elements of a retrieval record for one database, one schema, and one
 * record syntax. The elements are relative to the schema. There is one such
 * Explain record for each combination. The mapping of schema elements into
 * record elements may differ for each combination; the per-element details are
 * the default mapping, and client-requested re-tagging can change it. ANSI/NISO
 * Z39.50-2003 §3.2.10.3.12; ASN.1 comment 8.
 * 
 * Search with ExplainCategory `RetrievalRecordDetails`, DatabaseName,
 * SchemaOID, and RecordSyntaxOID. The search may also use HumanStringLanguage,
 * DateAdded, DateChanged, or DateExpires. ANSI/NISO Z39.50-2003 §3.2.10.1.2 and
 * §3.2.10.1.3.
 * 
 * Only the keys are brief. The per-element details are mandatory in a full
 * record. ANSI/NISO Z39.50-2003 ASN.1 comment 1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrievalRecordDetails ::= SEQUENCE {
 *     commonInfo          [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     databaseName        [1] IMPLICIT DatabaseName,
 *     schema              [2] IMPLICIT OBJECT IDENTIFIER,
 *     recordSyntax        [3] IMPLICIT OBJECT IDENTIFIER,
 *     -- Non-brief elements follow:
 *     description         [4] IMPLICIT HumanString OPTIONAL,
 *     detailsPerElement   [5] IMPLICIT SEQUENCE OF PerElementDetails OPTIONAL
 *     -- Mandatory in full record
 * }
 * ```
 * 
 * @class
 */
export
class RetrievalRecordDetails {
    /**
     * @summary `commonInfo`.
     * @description
     * Dates this Explain record was added and last changed, when it expires,
     * and the language of its human-readable text. Element set `B` includes
     * this component except `otherInfo`. DateAdded, DateChanged, and
     * DateExpires search these dates. ANSI/NISO Z39.50-2003 §3.2.10.3,
     * §3.2.10.1.3; ASN.1 comment 1.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `databaseName`.
     * @description
     * Database to which this record pertains. Key, searched with DatabaseName.
     * ANSI/NISO Z39.50-2003 §3.2.10.3.12.
     * @public
     * @readonly
     */
    readonly databaseName: DatabaseName;
    /**
     * @summary `schema`.
     * @description
     * Schema that defines the elements. Key, searched with SchemaOID. As a
     * search term, version 2 should use a dotted decimal character string;
     * version 3 should use an object identifier. ANSI/NISO Z39.50-2003 Appendix
     * ATR, note 4.
     * @public
     * @readonly
     */
    readonly schema: OBJECT_IDENTIFIER;
    /**
     * @summary `recordSyntax`.
     * @description
     * Record syntax of the retrieval record. Key, searched with
     * RecordSyntaxOID. As a search term, version 2 should use a dotted decimal
     * character string; version 3 should use an object identifier. ANSI/NISO
     * Z39.50-2003 Appendix ATR, note 4.
     * @public
     * @readonly
     */
    readonly recordSyntax: OBJECT_IDENTIFIER;
    /**
     * @summary `description`.
     * @description
     * Human-readable text, non-brief. §3.2.10.3.12 does not say what this
     * text must contain. ANSI/NISO Z39.50-2003 Explain ASN.1.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `detailsPerElement`.
     * @description
     * For each element described by the syntax, the per-element details.
     * Non-brief, and mandatory in a full record. ANSI/NISO Z39.50-2003
     * §3.2.10.3.12.
     * @public
     * @readonly
     */
    readonly detailsPerElement: OPTIONAL<PerElementDetails[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        databaseName: DatabaseName,
        schema: OBJECT_IDENTIFIER,
        recordSyntax: OBJECT_IDENTIFIER,
        description: OPTIONAL<HumanString>,
        detailsPerElement: OPTIONAL<PerElementDetails[]>
    ) {
        this.commonInfo = commonInfo;
        this.databaseName = databaseName;
        this.schema = schema;
        this.recordSyntax = recordSyntax;
        this.description = description;
        this.detailsPerElement = detailsPerElement;
    }

    /**
     * @summary Restructures an object into a RetrievalRecordDetails
     * @description
     * 
     * This takes an `object` and converts it to a `RetrievalRecordDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RetrievalRecordDetails`.
     * @returns {RetrievalRecordDetails}
     */
    public static _from_object (_o: { [_K in keyof (RetrievalRecordDetails)]: (RetrievalRecordDetails)[_K] }): RetrievalRecordDetails {
        return new RetrievalRecordDetails(_o.commonInfo, _o.databaseName, _o.schema, _o.recordSyntax, _o.description, _o.detailsPerElement);
    }


}

/**
 * @summary The Leading Root Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("schema", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordSyntax", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("detailsPerElement", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RetrievalRecordDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RetrievalRecordDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RetrievalRecordDetails: $.ASN1Decoder<RetrievalRecordDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalRecordDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrievalRecordDetails (el: _Element): RetrievalRecordDetails {
    if (!_cached_decoder_for_RetrievalRecordDetails) { _cached_decoder_for_RetrievalRecordDetails = function (el: _Element): RetrievalRecordDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let schema!: OBJECT_IDENTIFIER;
    let recordSyntax!: OBJECT_IDENTIFIER;
    let description: OPTIONAL<HumanString>;
    let detailsPerElement: OPTIONAL<PerElementDetails[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "recordSyntax": (_el: _Element): void => { recordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "detailsPerElement": (_el: _Element): void => { detailsPerElement = $._decode_implicit<PerElementDetails[]>(() => $._decodeSequenceOf<PerElementDetails>(() => _decode_PerElementDetails))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RetrievalRecordDetails,
        _extension_additions_list_spec_for_RetrievalRecordDetails,
        _root_component_type_list_2_spec_for_RetrievalRecordDetails,
        undefined,
    );
    return new RetrievalRecordDetails(
        commonInfo,
        databaseName,
        schema,
        recordSyntax,
        description,
        detailsPerElement
    );
}; }
    return _cached_decoder_for_RetrievalRecordDetails(el);
}

let _cached_encoder_for_RetrievalRecordDetails: $.ASN1Encoder<RetrievalRecordDetails> | null = null;

/**
 * @summary Encodes a(n) RetrievalRecordDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalRecordDetails, encoded as an ASN.1 Element.
 */
export
function _encode_RetrievalRecordDetails (value: RetrievalRecordDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrievalRecordDetails) { _cached_encoder_for_RetrievalRecordDetails = function (value: RetrievalRecordDetails, elGetter: $.ASN1Encoder<RetrievalRecordDetails>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeObjectIdentifier, $.BER)(value.recordSyntax, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.detailsPerElement !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<PerElementDetails>(() => _encode_PerElementDetails, $.BER), $.BER)(value.detailsPerElement, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RetrievalRecordDetails(value, elGetter);
}


/* eslint-enable */
