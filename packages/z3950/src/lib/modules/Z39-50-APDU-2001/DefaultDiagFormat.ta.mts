/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DefaultDiagFormat_addinfo, _decode_DefaultDiagFormat_addinfo, _encode_DefaultDiagFormat_addinfo } from "../Z39-50-APDU-2001/DefaultDiagFormat-addinfo.ta.mjs";


/**
 * @summary DefaultDiagFormat
 * @description
 *
 * Default diagnostic format, for versions 2 and 3. `diagnosticSetId`
 * selects the set. When it is the General Diagnostic Set, formerly
 * bib-1, object identifier `{Z39-50-diagnostic 1}`, `condition` is a
 * code from DIAG.1 and `addinfo` follows that table. Addinfo for a
 * number is a character-string representation; for an object
 * identifier, dotted decimal integers. A server should always include
 * `addinfo`, even when it has nothing further to say; a client may
 * accept an omission without treating it as a protocol error.
 * Comment 1, §DIAG.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultDiagFormat ::= SEQUENCE {
 *     diagnosticSetId OBJECT IDENTIFIER,
 *     condition       INTEGER,
 *     addinfo         CHOICE {
 *         v2Addinfo       VisibleString,      --Version 2
 *         v3Addinfo       InternationalString --Version 3
 *         -- SEE COMMENT 1
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class DefaultDiagFormat {
    /**
     * @summary `diagnosticSetId`.
     * @description
     *
     * Object identifier of the diagnostic set. The General Diagnostic
     * Set is `{Z39-50-diagnostic 1}`. §DIAG.1.
     *
     * @public
     * @readonly
     */
    readonly diagnosticSetId: OBJECT_IDENTIFIER;
    /**
     * @summary `condition`.
     * @description
     *
     * Condition code within the set named by `diagnosticSetId`.
     * When that set is the General Diagnostic Set
     * `{Z39-50-diagnostic 1}` (bib-1, renamed), the code is one of
     * the following. Addinfo is characters: a number is decimal
     * digits, and an object identifier is dot-separated integers.
     * DIAG.1 leaves addinfo unspecified except where a code names it.
     * Further codes may be registered at
     * http://lcweb.loc.gov/z3950/agency/defns/diag.html.
     * ANSI/NISO Z39.50-2003 DIAG.1.
     *
     * - 1: permanent system error.
     * - 2: temporary system error.
     * - 3: unsupported search.
     * - 4: Terms only exclusion (stop) words.
     * - 5: Too many argument words.
     * - 6: Too many boolean operators.
     * - 7: Too many truncated words.
     * - 8: Too many incomplete subfields.
     * - 9: Truncated words too short.
     * - 10: Invalid format for record number (search term).
     * - 11: Too many characters in search statement.
     * - 12: Too many records retrieved.
     * - 13: Present request out-of-range.
     * - 14: System error in presenting records.
     * - 15: Record not authorized to be sent intersystem.
     * - 16: Record exceeds Preferred-message-size.
     * - 17: Record exceeds Exceptional-record-size.
     * - 18: Result set not supported as a search term.
     * - 19: Only single result set as search term supported.
     * - 20: Only ANDing of a single result set as search term.
     * - 21: Result set exists and replace indicator off.
     * - 22: Result set naming not supported.
     * - 23: Specified combination of databases not supported.
     * - 24: Element set names not supported.
     * - 25: Specified element set name not valid for specified database.
     * - 26: Only generic form of element set name supported.
     * - 27: Result set no longer exists - unilaterally deleted by server.
     * - 28: Result set is in use.
     * - 29: One of the specified databases is locked.
     * - 30: Specified result set does not exist.
     * - 31: Resources exhausted - no results available.
     * - 32: Resources exhausted - unpredictable partial results available.
     * - 33: Resources exhausted - valid subset of results available.
     * - 100: (unspecified) error.
     * - 101: Access-control failure.
     * - 102: Challenge required, could not be issued - operation terminated.
     * - 103: Challenge required, could not be issued - record not included.
     * - 104: Challenge failed - record not included.
     * - 105: Terminated at client request.
     * - 106: No abstract syntaxes agreed to for this record.
     * - 107: Query type not supported.
     * - 108: Malformed query.
     * - 109: Database unavailable. Addinfo: database name.
     * - 110: Operator unsupported. Addinfo: operator.
     * - 111: Too many databases specified. Addinfo: maximum.
     * - 112: Too many result sets created. Addinfo: maximum.
     * - 113: Unsupported attribute type. Addinfo: type.
     * - 114: Unsupported Use attribute. Addinfo: value.
     * - 115: Unsupported term value for Use attribute. Addinfo: term.
     * - 116: Use attribute required but not supplied.
     * - 117: Unsupported Relation attribute. Addinfo: value.
     * - 118: Unsupported Structure attribute. Addinfo: value.
     * - 119: Unsupported Position attribute. Addinfo: value.
     * - 120: Unsupported Truncation attribute. Addinfo: value.
     * - 121: Unsupported Attribute Set. Addinfo: oid.
     * - 122: Unsupported Completeness attribute. Addinfo: value.
     * - 123: Unsupported attribute combination.
     * - 124: Unsupported coded value for term. Addinfo: value.
     * - 125: Malformed search term.
     * - 126: Illegal term value for attribute. Addinfo: term.
     * - 127: Unparsable format for un-normalized value. Addinfo: value.
     * - 128: Illegal result set name. Addinfo: name.
     * - 129: Proximity search of sets not supported.
     * - 130: Illegal result set in proximity search. Addinfo: result set name.
     * - 131: Unsupported proximity relation. Addinfo: value.
     * - 132: Unsupported proximity unit code. Addinfo: value.
     * - 201: Proximity not supported with this attribute combination.
     *   Addinfo: list.
     * - 202: Unsupported distance for proximity. Addinfo: distance.
     * - 203: Ordered flag not supported for proximity.
     * - 205: Only zero step size supported for Scan.
     * - 206: Specified step size not supported for Scan. Addinfo: step size.
     * - 207: Cannot sort according to sequence. Addinfo: sequence.
     * - 208: No result set name supplied on Sort.
     * - 209: Generic sort not supported (database-specific sort only supported).
     * - 210: Database specific sort not supported.
     * - 211: Too many sort keys. Addinfo: number.
     * - 212: Duplicate sort keys. Addinfo: key.
     * - 213: Unsupported missing data action. Addinfo: value.
     * - 214: Illegal sort relation. Addinfo: relation.
     * - 215: Illegal case value. Addinfo: value.
     * - 216: Illegal missing data action. Addinfo: value.
     * - 217: Segmentation: Cannot guarantee records will fit in specified segments.
     * - 218: ES: Package name already in use. Addinfo: name.
     * - 219: ES: no such package, on modify/delete. Addinfo: name.
     * - 220: ES: quota exceeded.
     * - 221: ES: extended service type not supported. Addinfo: type.
     * - 222: ES: permission denied on ES - id not authorized.
     * - 223: ES: permission denied on ES - cannot modify or delete.
     * - 224: ES: immediate execution failed.
     * - 225: ES: immediate execution not supported for this service.
     * - 226: ES: immediate execution not supported for these parameters.
     * - 227: No data available in requested record syntax.
     * - 228: Scan: malformed scan.
     * - 229: Term type not supported. Addinfo: type.
     * - 230: Sort: too many input results. Addinfo: max.
     * - 231: Sort: incompatible record formats.
     * - 232: Scan: term list not supported. Addinfo: alternative term list.
     * - 233: Scan: unsupported value of position-in-response. Addinfo: value.
     * - 234: Too many index terms processed. Addinfo: number of terms.
     * - 235: Database does not exist. Addinfo: database name.
     * - 236: Access to specified database denied. Addinfo: database name.
     * - 237: Sort: illegal sort.
     * - 238: Record not available in requested syntax. Addinfo: alternative
     *   suggested syntax(es).
     * - 239: Record syntax not supported. Addinfo: syntax.
     * - 240: Scan: Resources exhausted looking for satisfying terms.
     * - 241: Scan: Beginning or end of term list.
     * - 242: Segmentation: max-segment-size too small to segment record. Addinfo:
     *   smallest acceptable size.
     * - 243: Present: additional-ranges parameter not supported.
     * - 244: Present: comp-spec parameter not supported.
     * - 245: Type-1 query: restriction ('resultAttr') operand not supported.
     * - 246: Type-1 query: 'complex' attributeValue not supported.
     * - 247: Type-1 query: 'attributeSet' as part of AttributeElement not
     *   supported.
     * - 1001: Malformed APDU.
     * - 1002: ES: EXTERNAL form of Item Order request not supported.
     * - 1003: ES: Result set item form of Item Order request not supported.
     * - 1004: ES: Extended services not supported unless access control is in
     *   effect.
     * - 1005: Response records in Search response not supported.
     * - 1006: Response records in Search response not possible for specified
     *   database (or database combination). See note 1.
     * - 1007: No Explain server. Addinfo: pointers to servers that have a surrogate
     *   Explain database for this server. See note 2.
     * - 1008: ES: missing mandatory parameter for specified function. Addinfo:
     *   parameter.
     * - 1009: ES: Item Order, unsupported OID in itemRequest. Addinfo: OID.
     * - 1010: Init/AC: Bad Userid.
     * - 1011: Init/AC: Bad Userid and/or Password.
     * - 1012: Init/AC: No searches remaining (pre-purchased searches exhausted).
     * - 1013: Init/AC: Incorrect interface type (specified id valid only when used
     *   with a particular access method or client).
     * - 1014: Init/AC: Authentication System error.
     * - 1015: Init/AC: Maximum number of simultaneous sessions for Userid.
     * - 1016: Init/AC: Blocked network address.
     * - 1017: Init/AC: No databases available for specified userId.
     * - 1018: Init/AC: System temporarily out of resources.
     * - 1019: Init/AC: System not available due to maintenance. Addinfo: when it's
     *   expected back up.
     * - 1020: Init/AC: System temporarily unavailable. Addinfo: when it's expected
     *   back up.
     * - 1021: Init/AC: Account has expired.
     * - 1022: Init/AC: Password has expired so a new one must be supplied.
     * - 1023: Init/AC: Password has been changed by an administrator so a new one
     *   must be supplied.
     * - 1024: Unsupported Attribute. Addinfo: an unstructured string of the
     *   attribute-set OID, the attribute type, and the attribute value. See note 3.
     * - 1025: Service not supported for this database.
     * - 1026: Record cannot be opened because it is locked.
     * - 1027: SQL error.
     * - 1028: Record deleted.
     * - 1029: Scan: too many terms requested. Addinfo: max terms supported.
     * - 1030-1039: currently unassigned.
     * - 1040: ES: Invalid function. Addinfo: function.
     * - 1041: ES: Error in retention time.
     * - 1042: ES: Permissions data not understood. Addinfo: permissions.
     * - 1043: ES: Invalid OID for task specific parameters. Addinfo: oid.
     * - 1044: ES: Invalid action. Addinfo: action.
     * - 1045: ES: Unknown schema. Addinfo: schema.
     * - 1046: ES: Too many records in package. Addinfo: maximum number allowed.
     * - 1047: ES: Invalid wait action. Addinfo: wait action.
     * - 1048: ES: Cannot create task package -- exceeds maximum permissable size.
     *   Addinfo: maximum task package size. See note 4.
     * - 1049: ES: Cannot return task package -- exceeds maximum permissable size
     *   for ES response. Addinfo: maximum task package size for ES response. See
     *   note 5.
     * - 1050: ES: Extended services request too large. Addinfo: maximum size of
     *   extended services request. See note 6.
     * - 1051: Scan: Attribute set id required -- not supplied.
     * - 1052: ES: Cannot process task package record -- exceeds maximum permissible
     *   record size for ES. Addinfo: maximum record size for ES. See note 7.
     * - 1053: ES: Cannot return task package record -- exceeds maximum permissible
     *   record size for ES response. Addinfo: maximum record size for ES response.
     *   See note 8.
     * - 1054: Init: Required negotiation record not included. Addinfo: oid(s) of
     *   required negotiation record(s).
     * - 1055: Init: negotiation option required.
     * - 1056: Attribute not supported for database. Addinfo: attribute (oid, type,
     *   and value), and database name.
     * - 1057: ES: Unsupported value of task package parameter. Addinfo: parameter
     *   and value. See note 9.
     * - 1058: Duplicate Detection: Cannot dedup on requested record portion.
     * - 1059: Duplicate Detection: Requested detection criterion not supported.
     *   Addinfo: detection criterion.
     * - 1060: Duplicate Detection: Requested level of match not supported.
     * - 1061: Duplicate Detection: Requested regular expression not supported.
     * - 1062: Duplicate Detection: Cannot do clustering.
     * - 1063: Duplicate Detection: Retention criterion not supported. Addinfo:
     *   retention criterion.
     * - 1064: Duplicate Detection: Requested number (or percentage) of entries for
     *   retention too large.
     * - 1065: Duplicate Detection: Requested sort criterion not supported. Addinfo:
     *   sort criterion.
     * - 1066: CompSpec: Unknown schema, or schema not supported.
     * - 1067: Encapsulation: Encapsulated sequence of APDUs not supported. Addinfo:
     *   specific unsupported sequence.
     * - 1068: Encapsulation: Base operation (and encapsulated APDUs) not executed
     *   based on pre-screening analysis.
     * - 1069: No syntaxes available for this request. See note 10.
     * - 1070: user not authorized to receive record(s) in requested syntax.
     * - 1071: preferredRecordSyntax not supplied.
     * - 1072: Query term includes characters that do not translate into the target
     *   character set. Addinfo: Characters that do not translate.
     * 
     * Notes (DIAG.1):
     * 
     * - Note 1. 1006 is for an intermediary whose end server does not support
     *   piggybacked response records. 1005 means the intermediary itself does not.
     * - Note 2. 1007 is a Search diagnostic when the client searches Explain, the
     *   server does not support Explain, and it can point at a surrogate Explain
     *   server.
     * - Note 3. 1024 exists because conditions 113-122 are specific to bib-1.
     *   Example addinfo: attribute set 1.2.840.10003.3.7; type 1; value 4.
     * - Note 4. An ES update's records make the task package too large. The client
     *   must shrink it or send the update another way.
     * - Note 5. waitAction is wait, the package was created, and it is too large to
     *   return. The client may Search and Present the task-package database.
     *   Diagnostics 16 and 17 then apply.
     * - Note 6. The ES Update message itself is too large.
     * - Note 7. One record is too large. 1052 replaces that record in the task
     *   package; other records may still be processed and, when waitAction is wait,
     *   returned. Resubmit the record within the limit.
     * - Note 8. One record is too large to return. It may have been updated. 1053
     *   replaces it in the returned package. The client may Search and Present.
     * - Note 9. For example a period of fortnight when the server supports only
     *   seconds, or ExportInvocation records of ranges when the server supports
     *   only all.
     * - Note 10. Present status is failure. 1069 applies to the whole Present, or
     *   to the retrieval phase of Search, not to one record.
     * 
     *
     * @public
     * @readonly
     */
    readonly condition: INTEGER;
    /**
     * @summary `addinfo`.
     * @description
     *
     * Additional information for `condition`. Include it even when
     * empty, for compatibility with earlier versions. When the
     * diagnostic does not define what addinfo means, supply a text
     * string or a well-known empty value (`"null"` or a zero-length
     * string). When it does define a value, such as diagnostic 109
     * (database name), do not use that empty token. Version 2 uses
     * the VisibleString alternative; version 3 uses
     * InternationalString. Comment 1, §DIAG.1.
     *
     * @public
     * @readonly
     */
    readonly addinfo: DefaultDiagFormat_addinfo;

    constructor (
        diagnosticSetId: OBJECT_IDENTIFIER,
        condition: INTEGER,
        addinfo: DefaultDiagFormat_addinfo
    ) {
        this.diagnosticSetId = diagnosticSetId;
        this.condition = condition;
        this.addinfo = addinfo;
    }

    /**
     * @summary Restructures an object into a DefaultDiagFormat
     * @description
     * 
     * This takes an `object` and converts it to a `DefaultDiagFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefaultDiagFormat`.
     * @returns {DefaultDiagFormat}
     */
    public static _from_object (_o: { [_K in keyof (DefaultDiagFormat)]: (DefaultDiagFormat)[_K] }): DefaultDiagFormat {
        return new DefaultDiagFormat(_o.diagnosticSetId, _o.condition, _o.addinfo);
    }


}

/**
 * @summary The Leading Root Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("diagnosticSetId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("condition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("addinfo", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefaultDiagFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefaultDiagFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefaultDiagFormat: $.ASN1Decoder<DefaultDiagFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultDiagFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefaultDiagFormat (el: _Element): DefaultDiagFormat {
    if (!_cached_decoder_for_DefaultDiagFormat) { _cached_decoder_for_DefaultDiagFormat = function (el: _Element): DefaultDiagFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DefaultDiagFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "diagnosticSetId";
    sequence[1].name = "condition";
    sequence[2].name = "addinfo";
    const diagnosticSetId: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const condition: INTEGER = $._decodeInteger(sequence[1]);
    const addinfo: DefaultDiagFormat_addinfo = _decode_DefaultDiagFormat_addinfo(sequence[2]);
    return new DefaultDiagFormat(
        diagnosticSetId,
        condition,
        addinfo,

    );
}; }
    return _cached_decoder_for_DefaultDiagFormat(el);
}

let _cached_encoder_for_DefaultDiagFormat: $.ASN1Encoder<DefaultDiagFormat> | null = null;

/**
 * @summary Encodes a(n) DefaultDiagFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultDiagFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DefaultDiagFormat (value: DefaultDiagFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefaultDiagFormat) { _cached_encoder_for_DefaultDiagFormat = function (value: DefaultDiagFormat, elGetter: $.ASN1Encoder<DefaultDiagFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeObjectIdentifier(value.diagnosticSetId, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.condition, $.BER),
        /* REQUIRED   */ _encode_DefaultDiagFormat_addinfo(value.addinfo, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DefaultDiagFormat(value, elGetter);
}


/* eslint-enable */
