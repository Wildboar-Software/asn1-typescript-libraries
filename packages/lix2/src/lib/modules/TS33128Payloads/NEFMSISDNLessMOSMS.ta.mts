/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary NEFMSISDNLessMOSMS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFMSISDNLessMOSMS ::= SEQUENCE
 * {
 *     sUPI                      [1] SUPI,
 *     gPSI                      [2] GPSI,
 *     terminatingSMSParty       [3] AFID,
 *     sMS                       [4] SMSTPDUData OPTIONAL,
 *     sourcePort                [5] PortNumber OPTIONAL,
 *     destinationPort           [6] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NEFMSISDNLessMOSMS {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `terminatingSMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingSMSParty: AFID,
        /**
         * @summary `sMS`.
         * @public
         * @readonly
         */
        readonly sMS: OPTIONAL<SMSTPDUData>,
        /**
         * @summary `sourcePort`.
         * @public
         * @readonly
         */
        readonly sourcePort: OPTIONAL<PortNumber>,
        /**
         * @summary `destinationPort`.
         * @public
         * @readonly
         */
        readonly destinationPort: OPTIONAL<PortNumber>
    ) {}

    /**
     * @summary Restructures an object into a NEFMSISDNLessMOSMS
     * @description
     * 
     * This takes an `object` and converts it to a `NEFMSISDNLessMOSMS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFMSISDNLessMOSMS`.
     * @returns {NEFMSISDNLessMOSMS}
     */
    public static _from_object (_o: { [_K in keyof (NEFMSISDNLessMOSMS)]: (NEFMSISDNLessMOSMS)[_K] }): NEFMSISDNLessMOSMS {
        return new NEFMSISDNLessMOSMS(_o.sUPI, _o.gPSI, _o.terminatingSMSParty, _o.sMS, _o.sourcePort, _o.destinationPort);
    }


}

/**
 * @summary The Leading Root Component Types of NEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminatingSMSParty", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of NEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFMSISDNLessMOSMS: $.ASN1Decoder<NEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFMSISDNLessMOSMS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFMSISDNLessMOSMS (el: _Element): NEFMSISDNLessMOSMS {
    if (!_cached_decoder_for_NEFMSISDNLessMOSMS) { _cached_decoder_for_NEFMSISDNLessMOSMS = function (el: _Element): NEFMSISDNLessMOSMS {
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let terminatingSMSParty!: AFID;
    let sMS: OPTIONAL<SMSTPDUData>;
    let sourcePort: OPTIONAL<PortNumber>;
    let destinationPort: OPTIONAL<PortNumber>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "terminatingSMSParty": (_el: _Element): void => { terminatingSMSParty = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFMSISDNLessMOSMS,
        _extension_additions_list_spec_for_NEFMSISDNLessMOSMS,
        _root_component_type_list_2_spec_for_NEFMSISDNLessMOSMS,
        undefined,
    );
    return new NEFMSISDNLessMOSMS(
        sUPI,
        gPSI,
        terminatingSMSParty,
        sMS,
        sourcePort,
        destinationPort
    );
}; }
    return _cached_decoder_for_NEFMSISDNLessMOSMS(el);
}

let _cached_encoder_for_NEFMSISDNLessMOSMS: $.ASN1Encoder<NEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Encodes a(n) NEFMSISDNLessMOSMS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFMSISDNLessMOSMS, encoded as an ASN.1 Element.
 */
export
function _encode_NEFMSISDNLessMOSMS (value: NEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFMSISDNLessMOSMS) { _cached_encoder_for_NEFMSISDNLessMOSMS = function (value: NEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<NEFMSISDNLessMOSMS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AFID, $.BER)(value.terminatingSMSParty, $.BER),
            /* IF_ABSENT  */ ((value.sMS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_SMSTPDUData, $.BER)(value.sMS, $.BER)),
            /* IF_ABSENT  */ ((value.sourcePort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PortNumber, $.BER)(value.sourcePort, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PortNumber, $.BER)(value.destinationPort, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFMSISDNLessMOSMS(value, elGetter);
}


/* eslint-enable */
