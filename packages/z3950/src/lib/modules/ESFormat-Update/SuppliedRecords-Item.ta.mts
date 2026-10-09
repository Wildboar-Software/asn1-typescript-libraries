/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SuppliedRecords_Item_recordId, _decode_SuppliedRecords_Item_recordId, _encode_SuppliedRecords_Item_recordId } from "../ESFormat-Update/SuppliedRecords-Item-recordId.ta.mjs";
import { SuppliedRecords_Item_supplementalId, _decode_SuppliedRecords_Item_supplementalId, _encode_SuppliedRecords_Item_supplementalId } from "../ESFormat-Update/SuppliedRecords-Item-supplementalId.ta.mjs";
import { CorrelationInfo, _decode_CorrelationInfo, _encode_CorrelationInfo } from "../ESFormat-Update/CorrelationInfo.ta.mjs";


/**
 * @summary SuppliedRecords_Item
 * @description
 * 
 * One record in an update, plus optional record id, supplemental id, and
 * correlation information. For insert or replace, supply the whole record.
 * For replace or delete, the record or its ids must identify the database
 * record. For delete, identification is enough and the whole record need
 * not be supplied. For element update, supply elements so the server can
 * find the corresponding elements.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppliedRecords-Item ::= SEQUENCE {
 *     recordId [1] CHOICE {
 *         number [1] IMPLICIT INTEGER,
 *         string [2] IMPLICIT InternationalString,
 *         opaque [3] IMPLICIT OCTET STRING
 *     } OPTIONAL,
 *     supplementalId [2] CHOICE {
 *         timeStamp [1] IMPLICIT GeneralizedTime,
 *         versionNumber [2] IMPLICIT InternationalString,
 *         previousVersion [3] IMPLICIT EXTERNAL
 *     } OPTIONAL,
 *     correlationInfo [3] IMPLICIT CorrelationInfo OPTIONAL,
 *     record [4] IMPLICIT EXTERNAL
 * }
 * ```
 * 
 * @class
 */
export
class SuppliedRecords_Item {
    /**
     * @summary `recordId`.
     * @description
     * 
     * Optional record id for this supplied record. The standard does not
     * define the number, string, and opaque forms beyond those alternatives.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly recordId: OPTIONAL<SuppliedRecords_Item_recordId>;
    /**
     * @summary `supplementalId`.
     * @description
     * 
     * Optional extra identification of the database record, or of the correct
     * version: a timestamp, a version number, or another form such as a
     * previous version of the record. For element update this may identify the
     * record, not an element.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly supplementalId: OPTIONAL<SuppliedRecords_Item_supplementalId>;
    /**
     * @summary `correlationInfo`.
     * @description
     * 
     * Optional note, identifier, or both, stored with this record so a later
     * retrieval of the package can tie the server's per-record result back to
     * what the client sent. Opaque to the server, which should not process or
     * change it.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly correlationInfo: OPTIONAL<CorrelationInfo>;
    /**
     * @summary `record`.
     * @description
     * 
     * The supplied record. Whole record for insert or replace. For delete,
     * identifying information is required but the whole record need not be
     * supplied. For element update, the elements replace the corresponding
     * elements of the database record.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.5.
     * 
     * @public
     * @readonly
     */
    readonly record: EXTERNAL;

    constructor (
        recordId: OPTIONAL<SuppliedRecords_Item_recordId>,
        supplementalId: OPTIONAL<SuppliedRecords_Item_supplementalId>,
        correlationInfo: OPTIONAL<CorrelationInfo>,
        record: EXTERNAL
    ) {
        this.recordId = recordId;
        this.supplementalId = supplementalId;
        this.correlationInfo = correlationInfo;
        this.record = record;
    }

    /**
     * @summary Restructures an object into a SuppliedRecords_Item
     * @description
     * 
     * This takes an `object` and converts it to a `SuppliedRecords_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuppliedRecords_Item`.
     * @returns {SuppliedRecords_Item}
     */
    public static _from_object (_o: { [_K in keyof (SuppliedRecords_Item)]: (SuppliedRecords_Item)[_K] }): SuppliedRecords_Item {
        return new SuppliedRecords_Item(_o.recordId, _o.supplementalId, _o.correlationInfo, _o.record);
    }


}

/**
 * @summary The Leading Root Component Types of SuppliedRecords_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuppliedRecords_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("recordId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supplementalId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("correlationInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("record", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SuppliedRecords_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuppliedRecords_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuppliedRecords_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuppliedRecords_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuppliedRecords_Item: $.ASN1Decoder<SuppliedRecords_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppliedRecords_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppliedRecords_Item (el: _Element): SuppliedRecords_Item {
    if (!_cached_decoder_for_SuppliedRecords_Item) { _cached_decoder_for_SuppliedRecords_Item = function (el: _Element): SuppliedRecords_Item {
    let recordId: OPTIONAL<SuppliedRecords_Item_recordId>;
    let supplementalId: OPTIONAL<SuppliedRecords_Item_supplementalId>;
    let correlationInfo: OPTIONAL<CorrelationInfo>;
    let record!: EXTERNAL;
    const callbacks: $.DecodingMap = {
        "recordId": (_el: _Element): void => { recordId = $._decode_explicit<SuppliedRecords_Item_recordId>(() => _decode_SuppliedRecords_Item_recordId)(_el); },
        "supplementalId": (_el: _Element): void => { supplementalId = $._decode_explicit<SuppliedRecords_Item_supplementalId>(() => _decode_SuppliedRecords_Item_supplementalId)(_el); },
        "correlationInfo": (_el: _Element): void => { correlationInfo = $._decode_implicit<CorrelationInfo>(() => _decode_CorrelationInfo)(_el); },
        "record": (_el: _Element): void => { record = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuppliedRecords_Item,
        _extension_additions_list_spec_for_SuppliedRecords_Item,
        _root_component_type_list_2_spec_for_SuppliedRecords_Item,
        undefined,
    );
    return new SuppliedRecords_Item(
        recordId,
        supplementalId,
        correlationInfo,
        record
    );
}; }
    return _cached_decoder_for_SuppliedRecords_Item(el);
}

let _cached_encoder_for_SuppliedRecords_Item: $.ASN1Encoder<SuppliedRecords_Item> | null = null;

/**
 * @summary Encodes a(n) SuppliedRecords_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppliedRecords_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SuppliedRecords_Item (value: SuppliedRecords_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppliedRecords_Item) { _cached_encoder_for_SuppliedRecords_Item = function (value: SuppliedRecords_Item, elGetter: $.ASN1Encoder<SuppliedRecords_Item>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.recordId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_SuppliedRecords_Item_recordId, $.BER)(value.recordId, $.BER);
    }
    if (value.supplementalId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_SuppliedRecords_Item_supplementalId, $.BER)(value.supplementalId, $.BER);
    }
    if (value.correlationInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CorrelationInfo, $.BER)(value.correlationInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeExternal, $.BER)(value.record, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SuppliedRecords_Item(value, elGetter);
}


/* eslint-enable */
