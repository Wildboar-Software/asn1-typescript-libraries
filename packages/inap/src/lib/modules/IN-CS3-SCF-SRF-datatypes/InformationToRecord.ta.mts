/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElementaryMessageID, _decode_ElementaryMessageID, _encode_ElementaryMessageID } from "../IN-CS3-SCF-SRF-datatypes/ElementaryMessageID.ta.mjs";
// export { ElementaryMessageID, _decode_ElementaryMessageID, _encode_ElementaryMessageID } from "../IN-CS3-SCF-SRF-datatypes/ElementaryMessageID.ta.mjs";
import { InformationToRecord_controlDigits, _decode_InformationToRecord_controlDigits, _encode_InformationToRecord_controlDigits } from "../IN-CS3-SCF-SRF-datatypes/InformationToRecord-controlDigits.ta.mjs";
// export { InformationToRecord_controlDigits, _decode_InformationToRecord_controlDigits, _encode_InformationToRecord_controlDigits } from "../IN-CS3-SCF-SRF-datatypes/InformationToRecord-controlDigits.ta.mjs";


/**
 * @summary InformationToRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationToRecord ::= SEQUENCE {
 *   messageID               [0]  ElementaryMessageID OPTIONAL,
 *   messageDeletionTimeOut  [1]  INTEGER(1..3600) OPTIONAL,
 *   --Time units = hours
 *   timeToRecord            [3]  INTEGER OPTIONAL,
 *   --Time units = seconds
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
 *                    replayAllowed          [5]  BOOLEAN DEFAULT FALSE,
 *                    ...},
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InformationToRecord {
    /**
     * @summary `messageID`.
     * @public
     * @readonly
     */
    readonly messageID: OPTIONAL<ElementaryMessageID>;
    /**
     * @summary `messageDeletionTimeOut`.
     * @public
     * @readonly
     */
    readonly messageDeletionTimeOut: OPTIONAL<INTEGER>;
    /**
     * @summary `timeToRecord`.
     * @public
     * @readonly
     */
    readonly timeToRecord: OPTIONAL<INTEGER>;
    /**
     * @summary `controlDigits`.
     * @public
     * @readonly
     */
    readonly controlDigits: InformationToRecord_controlDigits;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messageID: OPTIONAL<ElementaryMessageID>,
        messageDeletionTimeOut: OPTIONAL<INTEGER>,
        timeToRecord: OPTIONAL<INTEGER>,
        controlDigits: InformationToRecord_controlDigits,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messageID = messageID;
        this.messageDeletionTimeOut = messageDeletionTimeOut;
        this.timeToRecord = timeToRecord;
        this.controlDigits = controlDigits;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
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
        return new InformationToRecord(_o.messageID, _o.messageDeletionTimeOut, _o.timeToRecord, _o.controlDigits, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InformationToRecord(
        messageID,
        messageDeletionTimeOut,
        timeToRecord,
        controlDigits,
        _unrecognizedExtensionsList
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
    if (!_cached_encoder_for_InformationToRecord) { _cached_encoder_for_InformationToRecord = function (value: InformationToRecord, elGetter: $.ASN1Encoder<InformationToRecord>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.messageID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ElementaryMessageID, $.BER)(value.messageID, $.BER);
    }
    if (value.messageDeletionTimeOut !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.messageDeletionTimeOut, $.BER);
    }
    if (value.timeToRecord !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.timeToRecord, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_InformationToRecord_controlDigits, $.BER)(value.controlDigits, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InformationToRecord(value, elGetter);
}


/* eslint-enable */
