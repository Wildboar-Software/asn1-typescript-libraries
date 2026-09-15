/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElementaryMessageID, _decode_ElementaryMessageID, _encode_ElementaryMessageID } from "../IN-CS2-datatypes/ElementaryMessageID.ta.mjs";
// export { ElementaryMessageID, _decode_ElementaryMessageID, _encode_ElementaryMessageID } from "../IN-CS2-datatypes/ElementaryMessageID.ta.mjs";
import { InformationToRecord_controlDigits, _decode_InformationToRecord_controlDigits, _encode_InformationToRecord_controlDigits } from "../IN-CS2-datatypes/InformationToRecord-controlDigits.ta.mjs";
// export { InformationToRecord_controlDigits, _decode_InformationToRecord_controlDigits, _encode_InformationToRecord_controlDigits } from "../IN-CS2-datatypes/InformationToRecord-controlDigits.ta.mjs";


/**
 * @summary InformationToRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationToRecord{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   messageID               [0]  ElementaryMessageID OPTIONAL,
 *   messageDeletionTimeOut  [1]  INTEGER(1..3600) OPTIONAL,
 *   timeToRecord            [3]  INTEGER(0..bound.&maxRecordingTime) OPTIONAL,
 *   controlDigits
 *     [4]  SEQUENCE {endOfRecordingDigit
 *                      [0]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *                    cancelDigit
 *                      [1]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *                    replayDigit
 *                      [2]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *                    restartRecordingDigit
 *                      [3]  OCTET STRING(SIZE (1..2)) OPTIONAL,
 *                    restartAllowed         [4]  BOOLEAN DEFAULT FALSE,
 *                    replayAllowed          [5]  BOOLEAN DEFAULT FALSE}
 * }
 * ```
 * 
 * @class
 */
export
class InformationToRecord {
    constructor (
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: OPTIONAL<ElementaryMessageID>,
        /**
         * @summary `messageDeletionTimeOut`.
         * @public
         * @readonly
         */
        readonly messageDeletionTimeOut: OPTIONAL<INTEGER>,
        /**
         * @summary `timeToRecord`.
         * @public
         * @readonly
         */
        readonly timeToRecord: OPTIONAL<INTEGER>,
        /**
         * @summary `controlDigits`.
         * @public
         * @readonly
         */
        readonly controlDigits: InformationToRecord_controlDigits
    ) {
        if (messageDeletionTimeOut !== undefined && (typeof messageDeletionTimeOut === "bigint" ? (messageDeletionTimeOut < 1n || messageDeletionTimeOut > 3600n) : (messageDeletionTimeOut < 1 || messageDeletionTimeOut > 3600))) {
            throw new ASN1OverflowError("InformationToRecord.messageDeletionTimeOut violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a InformationToRecord
     * @description
     * 
     * This takes an `object` and converts it to a `InformationToRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationToRecord`.
     * @returns {InformationToRecord}
     */
    public static _from_object (_o: { [_K in keyof (InformationToRecord)]: (InformationToRecord)[_K] }): InformationToRecord {
        return new InformationToRecord(_o.messageID, _o.messageDeletionTimeOut, _o.timeToRecord, _o.controlDigits);
    }


}

/**
 * @summary The Leading Root Component Types of InformationToRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformationToRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("messageID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("messageDeletionTimeOut", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeToRecord", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("controlDigits", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of InformationToRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformationToRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformationToRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformationToRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformationToRecord: $.ASN1Decoder<InformationToRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationToRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationToRecord (el: _Element): InformationToRecord {
    if (!_cached_decoder_for_InformationToRecord) { _cached_decoder_for_InformationToRecord = function (el: _Element): InformationToRecord {
    let messageID: OPTIONAL<ElementaryMessageID>;
    let messageDeletionTimeOut: OPTIONAL<INTEGER>;
    let timeToRecord: OPTIONAL<INTEGER>;
    let controlDigits!: InformationToRecord_controlDigits;
    const callbacks: $.DecodingMap = {
        "messageID": (_el: _Element): void => { messageID = $._decode_implicit<ElementaryMessageID>(() => _decode_ElementaryMessageID)(_el); },
        "messageDeletionTimeOut": (_el: _Element): void => { messageDeletionTimeOut = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeToRecord": (_el: _Element): void => { timeToRecord = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "controlDigits": (_el: _Element): void => { controlDigits = $._decode_implicit<InformationToRecord_controlDigits>(() => _decode_InformationToRecord_controlDigits)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformationToRecord,
        _extension_additions_list_spec_for_InformationToRecord,
        _root_component_type_list_2_spec_for_InformationToRecord,
        undefined,
    );
    return new InformationToRecord(
        messageID,
        messageDeletionTimeOut,
        timeToRecord,
        controlDigits
    );
}; }
    return _cached_decoder_for_InformationToRecord(el);
}

let _cached_encoder_for_InformationToRecord: $.ASN1Encoder<InformationToRecord> | null = null;

/**
 * @summary Encodes a(n) InformationToRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationToRecord, encoded as an ASN.1 Element.
 */
export
function _encode_InformationToRecord (value: InformationToRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationToRecord) { _cached_encoder_for_InformationToRecord = function (value: InformationToRecord): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.messageID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ElementaryMessageID, $.BER)(value.messageID, $.BER)),
            /* IF_ABSENT  */ ((value.messageDeletionTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.messageDeletionTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.timeToRecord === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.timeToRecord, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_InformationToRecord_controlDigits, $.BER)(value.controlDigits, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InformationToRecord(value, elGetter);
}


/* eslint-enable */
