/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSRSAddress, _decode_MMSRSAddress, _encode_MMSRSAddress } from "../MMSChargingDataTypes/MMSRSAddress.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../MMSChargingDataTypes/MMState.ta.mjs";


/**
 * @summary AttributesList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributesList ::= SEQUENCE {
 *    messageID       [0] IMPLICIT OCTET STRING,
 *    dateAndTime     [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    senderAddress   [2] IMPLICIT MMSRSAddress,
 *    subject         [3] IMPLICIT OCTET STRING,
 *    messageSize     [4] IMPLICIT INTEGER,
 *    mmFlags         [5] IMPLICIT OCTET STRING,
 *    mmState         [6] IMPLICIT MMState}
 * ```
 * 
 * @class
 */
export
class AttributesList {
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OCTET_STRING;
    /**
     * @summary `dateAndTime`.
     * @public
     * @readonly
     */
    readonly dateAndTime: OCTET_STRING;
    /**
     * @summary `senderAddress`.
     * @public
     * @readonly
     */
    readonly senderAddress: MMSRSAddress;
    /**
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: OCTET_STRING;
    /**
     * @summary `messageSize`.
     * @public
     * @readonly
     */
    readonly messageSize: INTEGER;
    /**
     * @summary `mmFlags`.
     * @public
     * @readonly
     */
    readonly mmFlags: OCTET_STRING;
    /**
     * @summary `mmState`.
     * @public
     * @readonly
     */
    readonly mmState: MMState;

    constructor (
        messageID: OCTET_STRING,
        dateAndTime: OCTET_STRING,
        senderAddress: MMSRSAddress,
        subject: OCTET_STRING,
        messageSize: INTEGER,
        mmFlags: OCTET_STRING,
        mmState: MMState
    ) {
        this.messageID = messageID;
        this.dateAndTime = dateAndTime;
        this.senderAddress = senderAddress;
        this.subject = subject;
        this.messageSize = messageSize;
        this.mmFlags = mmFlags;
        this.mmState = mmState;
    
        if ((this.dateAndTime.length !== 9)) {
            throw new ASN1SizeError("AttributesList.dateAndTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a AttributesList
     * @description
     * 
     * This takes an `object` and converts it to a `AttributesList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributesList`.
     * @returns {AttributesList}
     */
    public static _from_object (_o: { [_K in keyof (AttributesList)]: (AttributesList)[_K] }): AttributesList {
        return new AttributesList(_o.messageID, _o.dateAndTime, _o.senderAddress, _o.subject, _o.messageSize, _o.mmFlags, _o.mmState);
    }

        /**
         * @summary The enum used as the type of the component `mmState`
         * @public
         * @static
         */

    public static _enum_for_mmState = _enum_for_MMState;
}

/**
 * @summary The Leading Root Component Types of AttributesList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributesList: $.ComponentSpec[] = [
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dateAndTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("senderAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("subject", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("messageSize", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mmFlags", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mmState", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of AttributesList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributesList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributesList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributesList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributesList: $.ASN1Decoder<AttributesList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributesList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributesList (el: _Element): AttributesList {
    if (!_cached_decoder_for_AttributesList) { _cached_decoder_for_AttributesList = function (el: _Element): AttributesList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("AttributesList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "messageID";
    sequence[1].name = "dateAndTime";
    sequence[2].name = "senderAddress";
    sequence[3].name = "subject";
    sequence[4].name = "messageSize";
    sequence[5].name = "mmFlags";
    sequence[6].name = "mmState";
    const messageID: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const dateAndTime: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    const senderAddress: MMSRSAddress = $._decode_implicit<MMSRSAddress>(() => _decode_MMSRSAddress)(sequence[2]);
    const subject: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[3]);
    const messageSize: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[4]);
    const mmFlags: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[5]);
    const mmState: MMState = $._decode_implicit<MMState>(() => _decode_MMState)(sequence[6]);
    return new AttributesList(
        messageID,
        dateAndTime,
        senderAddress,
        subject,
        messageSize,
        mmFlags,
        mmState,

    );
}; }
    return _cached_decoder_for_AttributesList(el);
}

let _cached_encoder_for_AttributesList: $.ASN1Encoder<AttributesList> | null = null;

/**
 * @summary Encodes a(n) AttributesList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributesList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributesList (value: AttributesList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributesList) { _cached_encoder_for_AttributesList = function (value: AttributesList, _elGetter: $.ASN1Encoder<AttributesList>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.messageID, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.dateAndTime, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSRSAddress, $.BER)(value.senderAddress, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.subject, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.messageSize, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.mmFlags, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMState, $.BER)(value.mmState, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AttributesList(value, elGetter);
}


/* eslint-enable */
