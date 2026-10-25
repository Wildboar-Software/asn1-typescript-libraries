/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IEFRecord, _decode_IEFRecord, _encode_IEFRecord } from "../TS33128IdentityAssociation/IEFRecord.ta.mjs";
// export { IEFRecord, _decode_IEFRecord, _encode_IEFRecord } from "../TS33128IdentityAssociation/IEFRecord.ta.mjs";


/**
 * @summary IEFMessage
 * @description
 * 
 * When a record has been generated as described in clause 6.2.2A.2.2, the IEF
 * shall encode the IEFAssociationRecord or IEFDeassociationRecord as a
 * BER-encoded @TS33128IdentityAssociation.IEFMessage, and transmit it to the
 * ICF over the established TLS connection.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IEFMessage ::= SEQUENCE
 * {
 *     iEFRecordOID        [1] RELATIVE-OID,
 *     record              [2] IEFRecord
 * }
 * ```
 * 
 * @class
 */
export
class IEFMessage {
    /**
     * @summary `iEFRecordOID`.
     * @public
     * @readonly
     */
    readonly iEFRecordOID: RELATIVE_OID;
    /**
     * @summary `record`.
     * @public
     * @readonly
     */
    readonly record: IEFRecord;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iEFRecordOID: RELATIVE_OID,
        record: IEFRecord,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iEFRecordOID = iEFRecordOID;
        this.record = record;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IEFMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IEFMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IEFMessage`.
     * @returns {IEFMessage}
     */
    public static _from_object (_o: { [_K in keyof (IEFMessage)]: (IEFMessage)[_K] }): IEFMessage {
        return new IEFMessage(_o.iEFRecordOID, _o.record, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IEFMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IEFMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("iEFRecordOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("record", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IEFMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IEFMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IEFMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IEFMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IEFMessage: $.ASN1Decoder<IEFMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IEFMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IEFMessage (el: _Element): IEFMessage {
    if (!_cached_decoder_for_IEFMessage) { _cached_decoder_for_IEFMessage = function (el: _Element): IEFMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IEFMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iEFRecordOID";
    sequence[1].name = "record";
    let iEFRecordOID!: RELATIVE_OID;
    let record!: IEFRecord;
    iEFRecordOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    record = $._decode_explicit<IEFRecord>(() => _decode_IEFRecord)(sequence[1]);
    return new IEFMessage(
        iEFRecordOID,
        record,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IEFMessage(el);
}

let _cached_encoder_for_IEFMessage: $.ASN1Encoder<IEFMessage> | null = null;

/**
 * @summary Encodes a(n) IEFMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IEFMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IEFMessage (value: IEFMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IEFMessage) { _cached_encoder_for_IEFMessage = function (value: IEFMessage, elGetter: $.ASN1Encoder<IEFMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.iEFRecordOID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IEFRecord, $.BER)(value.record, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IEFMessage(value, elGetter);
}


/* eslint-enable */
