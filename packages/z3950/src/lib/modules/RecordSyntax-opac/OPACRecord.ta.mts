/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HoldingsRecord, _decode_HoldingsRecord, _encode_HoldingsRecord } from "../RecordSyntax-opac/HoldingsRecord.ta.mjs";


/**
 * @summary OPACRecord
 * @description
 * 
 * OPAC record (module OID `{z39-50-recordSyntax opac(102)}`,
 * `1.2.840.10003.5.102`).
 * 
 * ANSI/NISO Z39.50-2003 removed OPAC and Summary from Appendix REC and does not
 * define this syntax. The only OPAC sentence left is an example of nested GRS-1
 * records (a bibliographic record, holdings, and circulation) under tagSet-M,
 * which is not a definition of this type (RET.3.4.1.2.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPACRecord ::= SEQUENCE {
 *     bibliographicRecord    [1] IMPLICIT EXTERNAL OPTIONAL,
 *     holdingsData           [2] IMPLICIT SEQUENCE OF HoldingsRecord OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class OPACRecord {
    /**
     * @summary `bibliographicRecord`.
     * @description
     * 
     * ANSI/NISO Z39.50-2003 removed the OPAC record syntax and gives no further
     * semantics. The module ASN.1 does not comment this component.
     * @public
     * @readonly
     */
    readonly bibliographicRecord: OPTIONAL<EXTERNAL>;
    /**
     * @summary `holdingsData`.
     * @description
     * 
     * ANSI/NISO Z39.50-2003 removed the OPAC record syntax and gives no further
     * semantics. The module ASN.1 does not comment this component.
     * @public
     * @readonly
     */
    readonly holdingsData: OPTIONAL<HoldingsRecord[]>;

    constructor (
        bibliographicRecord: OPTIONAL<EXTERNAL>,
        holdingsData: OPTIONAL<HoldingsRecord[]>
    ) {
        this.bibliographicRecord = bibliographicRecord;
        this.holdingsData = holdingsData;
    }

    /**
     * @summary Restructures an object into a OPACRecord
     * @description
     * 
     * This takes an `object` and converts it to a `OPACRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OPACRecord`.
     * @returns {OPACRecord}
     */
    public static _from_object (_o: { [_K in keyof (OPACRecord)]: (OPACRecord)[_K] }): OPACRecord {
        return new OPACRecord(_o.bibliographicRecord, _o.holdingsData);
    }


}

/**
 * @summary The Leading Root Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OPACRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("bibliographicRecord", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("holdingsData", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OPACRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OPACRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OPACRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OPACRecord: $.ASN1Decoder<OPACRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OPACRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OPACRecord (el: _Element): OPACRecord {
    if (!_cached_decoder_for_OPACRecord) { _cached_decoder_for_OPACRecord = function (el: _Element): OPACRecord {
    let bibliographicRecord: OPTIONAL<EXTERNAL>;
    let holdingsData: OPTIONAL<HoldingsRecord[]>;
    const callbacks: $.DecodingMap = {
        "bibliographicRecord": (_el: _Element): void => { bibliographicRecord = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "holdingsData": (_el: _Element): void => { holdingsData = $._decode_implicit<HoldingsRecord[]>(() => $._decodeSequenceOf<HoldingsRecord>(() => _decode_HoldingsRecord))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPACRecord,
        _extension_additions_list_spec_for_OPACRecord,
        _root_component_type_list_2_spec_for_OPACRecord,
        undefined,
    );
    return new OPACRecord(
        bibliographicRecord,
        holdingsData
    );
}; }
    return _cached_decoder_for_OPACRecord(el);
}

let _cached_encoder_for_OPACRecord: $.ASN1Encoder<OPACRecord> | null = null;

/**
 * @summary Encodes a(n) OPACRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OPACRecord, encoded as an ASN.1 Element.
 */
export
function _encode_OPACRecord (value: OPACRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OPACRecord) { _cached_encoder_for_OPACRecord = function (value: OPACRecord, elGetter: $.ASN1Encoder<OPACRecord>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.bibliographicRecord !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER)(value.bibliographicRecord, $.BER);
    }
    if (value.holdingsData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<HoldingsRecord>(() => _encode_HoldingsRecord, $.BER), $.BER)(value.holdingsData, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OPACRecord(value, elGetter);
}


/* eslint-enable */
