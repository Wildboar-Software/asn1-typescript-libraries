/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    OCTET_STRING,
    INTEGER,
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketReportIndications, _decode_PacketReportIndications, _encode_PacketReportIndications } from "../IPAccessPDU/PacketReportIndications.ta.mjs";
import { PacketReportTrigger, _decode_PacketReportTrigger, _encode_PacketReportTrigger, _enum_for_PacketReportTrigger } from "../IPAccessPDU/PacketReportTrigger.ta.mjs";


/**
 * @summary PacketReportSummary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketReportSummary ::= SEQUENCE
 * {
 *     header         [1] OCTET STRING,
 *     indications    [2] PacketReportIndications,
 *     trigger        [3] PacketReportTrigger,
 *     packetCount    [4] INTEGER OPTIONAL,
 *     byteCount      [5] INTEGER OPTIONAL,
 *     firstTimestamp [6] GeneralizedTime OPTIONAL,
 *     lastTimestamp  [7] GeneralizedTime OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketReportSummary {
    constructor (
        /**
         * @summary `header`.
         * @public
         * @readonly
         */
        readonly header: OCTET_STRING,
        /**
         * @summary `indications`.
         * @public
         * @readonly
         */
        readonly indications: PacketReportIndications,
        /**
         * @summary `trigger`.
         * @public
         * @readonly
         */
        readonly trigger: PacketReportTrigger,
        /**
         * @summary `packetCount`.
         * @public
         * @readonly
         */
        readonly packetCount: OPTIONAL<INTEGER>,
        /**
         * @summary `byteCount`.
         * @public
         * @readonly
         */
        readonly byteCount: OPTIONAL<INTEGER>,
        /**
         * @summary `firstTimestamp`.
         * @public
         * @readonly
         */
        readonly firstTimestamp: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `lastTimestamp`.
         * @public
         * @readonly
         */
        readonly lastTimestamp: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PacketReportSummary
     * @description
     * 
     * This takes an `object` and converts it to a `PacketReportSummary`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketReportSummary`.
     * @returns {PacketReportSummary}
     */
    public static _from_object (_o: { [_K in keyof (PacketReportSummary)]: (PacketReportSummary)[_K] }): PacketReportSummary {
        return new PacketReportSummary(_o.header, _o.indications, _o.trigger, _o.packetCount, _o.byteCount, _o.firstTimestamp, _o.lastTimestamp, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `trigger`
     * @public
     * @static
     */
    public static _enum_for_trigger = _enum_for_PacketReportTrigger;
}

/**
 * @summary The Leading Root Component Types of PacketReportSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketReportSummary: $.ComponentSpec[] = [
    new $.ComponentSpec("header", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("indications", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("trigger", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("packetCount", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("byteCount", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("firstTimestamp", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("lastTimestamp", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of PacketReportSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketReportSummary: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketReportSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketReportSummary: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketReportSummary: $.ASN1Decoder<PacketReportSummary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketReportSummary
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketReportSummary (el: _Element): PacketReportSummary {
    if (!_cached_decoder_for_PacketReportSummary) { _cached_decoder_for_PacketReportSummary = function (el: _Element): PacketReportSummary {
    let header!: OCTET_STRING;
    let indications!: PacketReportIndications;
    let trigger!: PacketReportTrigger;
    let packetCount: OPTIONAL<INTEGER>;
    let byteCount: OPTIONAL<INTEGER>;
    let firstTimestamp: OPTIONAL<GeneralizedTime>;
    let lastTimestamp: OPTIONAL<GeneralizedTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "header": (_el: _Element): void => { header = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "indications": (_el: _Element): void => { indications = $._decode_implicit<PacketReportIndications>(() => _decode_PacketReportIndications)(_el); },
        "trigger": (_el: _Element): void => { trigger = $._decode_implicit<PacketReportTrigger>(() => _decode_PacketReportTrigger)(_el); },
        "packetCount": (_el: _Element): void => { packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "byteCount": (_el: _Element): void => { byteCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "firstTimestamp": (_el: _Element): void => { firstTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "lastTimestamp": (_el: _Element): void => { lastTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketReportSummary,
        _extension_additions_list_spec_for_PacketReportSummary,
        _root_component_type_list_2_spec_for_PacketReportSummary,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketReportSummary(
        header,
        indications,
        trigger,
        packetCount,
        byteCount,
        firstTimestamp,
        lastTimestamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketReportSummary(el);
}

let _cached_encoder_for_PacketReportSummary: $.ASN1Encoder<PacketReportSummary> | null = null;

/**
 * @summary Encodes a(n) PacketReportSummary into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketReportSummary, encoded as an ASN.1 Element.
 */
export
function _encode_PacketReportSummary (value: PacketReportSummary, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketReportSummary) { _cached_encoder_for_PacketReportSummary = function (value: PacketReportSummary, elGetter: $.ASN1Encoder<PacketReportSummary>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.header, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PacketReportIndications, $.BER)(value.indications, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PacketReportTrigger, $.BER)(value.trigger, $.BER),
            /* IF_ABSENT  */ ((value.packetCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.packetCount, $.BER)),
            /* IF_ABSENT  */ ((value.byteCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.byteCount, $.BER)),
            /* IF_ABSENT  */ ((value.firstTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeGeneralizedTime, $.BER)(value.firstTimestamp, $.BER)),
            /* IF_ABSENT  */ ((value.lastTimestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeGeneralizedTime, $.BER)(value.lastTimestamp, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PacketReportSummary(value, elGetter);
}


/* eslint-enable */
