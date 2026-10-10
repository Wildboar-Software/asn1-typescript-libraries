/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
    GeneralizedTime,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDSRSummaryTriggerIPaccess, _decode_PDSRSummaryTriggerIPaccess, _encode_PDSRSummaryTriggerIPaccess, _enum_for_PDSRSummaryTriggerIPaccess } from "../IPAccessPDU/PDSRSummaryTriggerIPaccess.ta.mjs";


/**
 * @summary PDSRInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRInformation ::= SEQUENCE
 * {
 *     summaryTrigger          [0] PDSRSummaryTriggerIPaccess,
 *     firstPacketTimestamp    [1] GeneralizedTime,
 *     lastPacketTimestamp     [2] GeneralizedTime,
 *     packetCount             [3] INTEGER,
 *     byteCount               [4] INTEGER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PDSRInformation {
    constructor (
        /**
         * @summary `summaryTrigger`.
         * @public
         * @readonly
         */
        readonly summaryTrigger: PDSRSummaryTriggerIPaccess,
        /**
         * @summary `firstPacketTimestamp`.
         * @public
         * @readonly
         */
        readonly firstPacketTimestamp: GeneralizedTime,
        /**
         * @summary `lastPacketTimestamp`.
         * @public
         * @readonly
         */
        readonly lastPacketTimestamp: GeneralizedTime,
        /**
         * @summary `packetCount`.
         * @public
         * @readonly
         */
        readonly packetCount: INTEGER,
        /**
         * @summary `byteCount`.
         * @public
         * @readonly
         */
        readonly byteCount: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PDSRInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PDSRInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDSRInformation`.
     * @returns {PDSRInformation}
     */
    public static _from_object (_o: { [_K in keyof (PDSRInformation)]: (PDSRInformation)[_K] }): PDSRInformation {
        return new PDSRInformation(_o.summaryTrigger, _o.firstPacketTimestamp, _o.lastPacketTimestamp, _o.packetCount, _o.byteCount, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `summaryTrigger`
     * @public
     * @static
     */
    public static _enum_for_summaryTrigger = _enum_for_PDSRSummaryTriggerIPaccess;
}

/**
 * @summary The Leading Root Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDSRInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("summaryTrigger", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("firstPacketTimestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lastPacketTimestamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("packetCount", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("byteCount", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDSRInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDSRInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDSRInformation: $.ASN1Decoder<PDSRInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSRInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDSRInformation (el: _Element): PDSRInformation {
    if (!_cached_decoder_for_PDSRInformation) { _cached_decoder_for_PDSRInformation = function (el: _Element): PDSRInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("PDSRInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "summaryTrigger";
    sequence[1].name = "firstPacketTimestamp";
    sequence[2].name = "lastPacketTimestamp";
    sequence[3].name = "packetCount";
    sequence[4].name = "byteCount";
    let summaryTrigger!: PDSRSummaryTriggerIPaccess;
    let firstPacketTimestamp!: GeneralizedTime;
    let lastPacketTimestamp!: GeneralizedTime;
    let packetCount!: INTEGER;
    let byteCount!: INTEGER;
    summaryTrigger = $._decode_implicit<PDSRSummaryTriggerIPaccess>(() => _decode_PDSRSummaryTriggerIPaccess)(sequence[0]);
    firstPacketTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[1]);
    lastPacketTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[2]);
    packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[3]);
    byteCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[4]);
    return new PDSRInformation(
        summaryTrigger,
        firstPacketTimestamp,
        lastPacketTimestamp,
        packetCount,
        byteCount,
        sequence.slice(5)
    );
}; }
    return _cached_decoder_for_PDSRInformation(el);
}

let _cached_encoder_for_PDSRInformation: $.ASN1Encoder<PDSRInformation> | null = null;

/**
 * @summary Encodes a(n) PDSRInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSRInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PDSRInformation (value: PDSRInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDSRInformation) { _cached_encoder_for_PDSRInformation = function (value: PDSRInformation, elGetter: $.ASN1Encoder<PDSRInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PDSRSummaryTriggerIPaccess, $.BER)(value.summaryTrigger, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.firstPacketTimestamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.lastPacketTimestamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.packetCount, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.byteCount, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDSRInformation(value, elGetter);
}


/* eslint-enable */
