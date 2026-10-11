/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { NamePlusRecord_record, _decode_NamePlusRecord_record, _encode_NamePlusRecord_record } from "../Z39-50-APDU-2001/NamePlusRecord-record.ta.mjs";


/**
 * @summary NamePlusRecord
 * @description
 *
 * One response record in a Search response, Present response, or
 * Segment, optionally tagged with its database. The database name
 * must accompany the first response record or starting fragment of
 * the first segment, and any record or starting fragment from a
 * database different from its immediate predecessor. The name need
 * not be one of the databases listed on the Search that created the
 * result set. §3.2.2.1.7, §3.2.3.1.8, §3.2.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamePlusRecord ::= SEQUENCE {
 *     name    [0] IMPLICIT DatabaseName OPTIONAL,
 *     record  [1] CHOICE {
 *         retrievalRecord             [1] EXTERNAL,
 *         surrogateDiagnostic         [2] DiagRec,
 *         --Must select one of the above two, retrievalRecord or surrogateDiagnostic,
 *         --unless 'level 2 segmentation' is in effect.
 *         startingFragment            [3] FragmentSyntax,
 *         intermediateFragment        [4] FragmentSyntax,
 *         finalFragment               [5] FragmentSyntax
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class NamePlusRecord {
    /**
     * @summary `name`.
     * @description
     *
     * Database in which this record resides. Required on the first
     * record or starting fragment of the aggregate response, and on
     * any record or starting fragment whose database differs from the
     * previous one. Otherwise optional. Case-insensitive.
     * §3.2.2.1.7, §3.2.3.1.8.
     *
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<DatabaseName>;
    /**
     * @summary `record`.
     * @description
     *
     * Retrieval record or surrogate diagnostic. Unless level-2
     * segmentation is in effect, one of those two must be chosen.
     * Under level 2, a starting, intermediate, or final fragment may
     * be used instead. A diagnostic record is not segmented.
     * §3.2.3.2.1, §3.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly record: NamePlusRecord_record;

    constructor (
        name: OPTIONAL<DatabaseName>,
        record: NamePlusRecord_record
    ) {
        this.name = name;
        this.record = record;
    }

    /**
     * @summary Restructures an object into a NamePlusRecord
     * @description
     * 
     * This takes an `object` and converts it to a `NamePlusRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NamePlusRecord`.
     * @returns {NamePlusRecord}
     */
    public static _from_object (_o: { [_K in keyof (NamePlusRecord)]: (NamePlusRecord)[_K] }): NamePlusRecord {
        return new NamePlusRecord(_o.name, _o.record);
    }


}

/**
 * @summary The Leading Root Component Types of NamePlusRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NamePlusRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("record", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NamePlusRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NamePlusRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NamePlusRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NamePlusRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NamePlusRecord: $.ASN1Decoder<NamePlusRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamePlusRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamePlusRecord (el: _Element): NamePlusRecord {
    if (!_cached_decoder_for_NamePlusRecord) { _cached_decoder_for_NamePlusRecord = function (el: _Element): NamePlusRecord {
    let name: OPTIONAL<DatabaseName>;
    let record!: NamePlusRecord_record;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "record": (_el: _Element): void => { record = $._decode_explicit<NamePlusRecord_record>(() => _decode_NamePlusRecord_record)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NamePlusRecord,
        _extension_additions_list_spec_for_NamePlusRecord,
        _root_component_type_list_2_spec_for_NamePlusRecord,
        undefined,
    );
    return new NamePlusRecord(
        name,
        record
    );
}; }
    return _cached_decoder_for_NamePlusRecord(el);
}

let _cached_encoder_for_NamePlusRecord: $.ASN1Encoder<NamePlusRecord> | null = null;

/**
 * @summary Encodes a(n) NamePlusRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamePlusRecord, encoded as an ASN.1 Element.
 */
export
function _encode_NamePlusRecord (value: NamePlusRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamePlusRecord) { _cached_encoder_for_NamePlusRecord = function (value: NamePlusRecord, elGetter: $.ASN1Encoder<NamePlusRecord>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.name !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DatabaseName, $.BER)(value.name, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_NamePlusRecord_record, $.BER)(value.record, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NamePlusRecord(value, elGetter);
}


/* eslint-enable */
