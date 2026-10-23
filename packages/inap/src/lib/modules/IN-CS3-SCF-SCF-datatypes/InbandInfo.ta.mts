/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-CS3-SCF-SCF-datatypes/MessageID.ta.mjs";
// export { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-CS3-SCF-SCF-datatypes/MessageID.ta.mjs";


/**
 * @summary InbandInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InbandInfo ::= SEQUENCE {
 *   messageId            [0]  MessageID,
 *   numberOfRepetitions  [1]  INTEGER(1..127) OPTIONAL,
 *   duration             [2]  INTEGER(1..32767) OPTIONAL,
 *   interval             [3]  INTEGER(1..32767) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InbandInfo {
    /**
     * @summary `messageId`.
     * @public
     * @readonly
     */
    readonly messageId: MessageID;
    /**
     * @summary `numberOfRepetitions`.
     * @public
     * @readonly
     */
    readonly numberOfRepetitions: OPTIONAL<INTEGER>;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: OPTIONAL<INTEGER>;
    /**
     * @summary `interval`.
     * @public
     * @readonly
     */
    readonly interval: OPTIONAL<INTEGER>;

    constructor (
        messageId: MessageID,
        numberOfRepetitions: OPTIONAL<INTEGER>,
        duration: OPTIONAL<INTEGER>,
        interval: OPTIONAL<INTEGER>
    ) {
        this.messageId = messageId;
        this.numberOfRepetitions = numberOfRepetitions;
        this.duration = duration;
        this.interval = interval;
    }

    /**
     * @summary Restructures an object into a InbandInfo
     * @description
     * 
     * This takes an `object` and converts it to a `InbandInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InbandInfo`.
     * @returns {InbandInfo}
     */
    public static _from_object (_o: { [_K in keyof (InbandInfo)]: (InbandInfo)[_K] }): InbandInfo {
        return new InbandInfo(_o.messageId, _o.numberOfRepetitions, _o.duration, _o.interval);
    }


}

/**
 * @summary The Leading Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InbandInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfRepetitions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interval", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InbandInfo: $.ASN1Decoder<InbandInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InbandInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InbandInfo (el: _Element): InbandInfo {
    if (!_cached_decoder_for_InbandInfo) { _cached_decoder_for_InbandInfo = function (el: _Element): InbandInfo {
    let messageId!: MessageID;
    let numberOfRepetitions: OPTIONAL<INTEGER>;
    let duration: OPTIONAL<INTEGER>;
    let interval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "messageId": (_el: _Element): void => { messageId = $._decode_implicit<MessageID>(() => _decode_MessageID)(_el); },
        "numberOfRepetitions": (_el: _Element): void => { numberOfRepetitions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interval": (_el: _Element): void => { interval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InbandInfo,
        _extension_additions_list_spec_for_InbandInfo,
        _root_component_type_list_2_spec_for_InbandInfo,
        undefined,
    );
    return new InbandInfo(
        messageId,
        numberOfRepetitions,
        duration,
        interval
    );
}; }
    return _cached_decoder_for_InbandInfo(el);
}

let _cached_encoder_for_InbandInfo: $.ASN1Encoder<InbandInfo> | null = null;

/**
 * @summary Encodes a(n) InbandInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InbandInfo, encoded as an ASN.1 Element.
 */
export
function _encode_InbandInfo (value: InbandInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InbandInfo) { _cached_encoder_for_InbandInfo = function (value: InbandInfo, elGetter: $.ASN1Encoder<InbandInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageID, $.BER)(value.messageId, $.BER));
    if (value.numberOfRepetitions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRepetitions, $.BER));
    }
    if (value.duration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    }
    if (value.interval !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.interval, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InbandInfo(value, elGetter);
}


/* eslint-enable */
