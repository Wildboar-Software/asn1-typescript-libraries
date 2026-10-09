/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ClientPartNotToKeep_records, _decode_ClientPartNotToKeep_records, _encode_ClientPartNotToKeep_records } from "../ESFormat-ExportInvocation/ClientPartNotToKeep-records.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * Client parameters of Export Invocation that are not kept in the task
 * package: the transient result set and the records selected from it.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.7, EXT.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep ::= SEQUENCE {
 *     resultSetId [1] IMPLICIT InternationalString,
 *     records     [2] CHOICE {
 *         all         [1] IMPLICIT NULL,
 *         ranges      [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *             start       [1] IMPLICIT INTEGER,
 *             count       [2] IMPLICIT INTEGER OPTIONAL
 *             -- Count may be omitted only on last range,
 *             -- to indicate "all remaining records beginning with 'start'."
 *         }
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep {
    /**
     * @summary `resultSetId`.
     * @description
     * 
     * Name of a transient result set from which records are selected for
     * export.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly resultSetId: InternationalString;
    /**
     * @summary `records`.
     * @description
     * 
     * Which records to export: every record in the result set, or a set of
     * ranges. The last range may mean all records beginning with a given
     * record.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.7.
     * 
     * @public
     * @readonly
     */
    readonly records: ClientPartNotToKeep_records;

    constructor (
        resultSetId: InternationalString,
        records: ClientPartNotToKeep_records
    ) {
        this.resultSetId = resultSetId;
        this.records = records;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep`.
     * @returns {ClientPartNotToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep)]: (ClientPartNotToKeep)[_K] }): ClientPartNotToKeep {
        return new ClientPartNotToKeep(_o.resultSetId, _o.records);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("resultSetId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("records", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = function (el: _Element): ClientPartNotToKeep {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ClientPartNotToKeep contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "resultSetId";
    sequence[1].name = "records";
    const resultSetId: InternationalString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    const records: ClientPartNotToKeep_records = $._decode_explicit<ClientPartNotToKeep_records>(() => _decode_ClientPartNotToKeep_records)(sequence[1]);
    return new ClientPartNotToKeep(
        resultSetId,
        records,

    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = function (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<ClientPartNotToKeep>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.resultSetId, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep_records, $.BER)(value.records, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
