/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFPositioningInfoTransfer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPositioningInfoTransfer ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     sUCI                        [2] SUCI OPTIONAL,
 *     pEI                         [3] PEI OPTIONAL,
 *     gPSI                        [4] GPSI OPTIONAL,
 *     gUTI                        [5] FiveGGUTI OPTIONAL,
 *     nRPPaMessage                [6] OCTET STRING OPTIONAL,
 *     lPPMessage                  [7] OCTET STRING OPTIONAL,
 *     lcsCorrelationId            [8] UTF8String (SIZE(1..255)),
 *     additionalUserIdentifiers   [9] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFPositioningInfoTransfer {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<FiveGGUTI>,
        /**
         * @summary `nRPPaMessage`.
         * @public
         * @readonly
         */
        readonly nRPPaMessage: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lPPMessage`.
         * @public
         * @readonly
         */
        readonly lPPMessage: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lcsCorrelationId`.
         * @public
         * @readonly
         */
        readonly lcsCorrelationId: UTF8String,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFPositioningInfoTransfer
     * @description
     * 
     * This takes an `object` and converts it to a `AMFPositioningInfoTransfer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFPositioningInfoTransfer`.
     * @returns {AMFPositioningInfoTransfer}
     */
    public static _from_object (_o: { [_K in keyof (AMFPositioningInfoTransfer)]: (AMFPositioningInfoTransfer)[_K] }): AMFPositioningInfoTransfer {
        return new AMFPositioningInfoTransfer(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.nRPPaMessage, _o.lPPMessage, _o.lcsCorrelationId, _o.additionalUserIdentifiers);
    }


}

/**
 * @summary The Leading Root Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nRPPaMessage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("lPPMessage", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("lcsCorrelationId", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFPositioningInfoTransfer: $.ASN1Decoder<AMFPositioningInfoTransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFPositioningInfoTransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFPositioningInfoTransfer (el: _Element): AMFPositioningInfoTransfer {
    if (!_cached_decoder_for_AMFPositioningInfoTransfer) { _cached_decoder_for_AMFPositioningInfoTransfer = function (el: _Element): AMFPositioningInfoTransfer {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let nRPPaMessage: OPTIONAL<OCTET_STRING>;
    let lPPMessage: OPTIONAL<OCTET_STRING>;
    let lcsCorrelationId!: UTF8String;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "nRPPaMessage": (_el: _Element): void => { nRPPaMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lPPMessage": (_el: _Element): void => { lPPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsCorrelationId": (_el: _Element): void => { lcsCorrelationId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFPositioningInfoTransfer,
        _extension_additions_list_spec_for_AMFPositioningInfoTransfer,
        _root_component_type_list_2_spec_for_AMFPositioningInfoTransfer,
        undefined,
    );
    return new AMFPositioningInfoTransfer(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        nRPPaMessage,
        lPPMessage,
        lcsCorrelationId,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFPositioningInfoTransfer(el);
}

let _cached_encoder_for_AMFPositioningInfoTransfer: $.ASN1Encoder<AMFPositioningInfoTransfer> | null = null;

/**
 * @summary Encodes a(n) AMFPositioningInfoTransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFPositioningInfoTransfer, encoded as an ASN.1 Element.
 */
export
function _encode_AMFPositioningInfoTransfer (value: AMFPositioningInfoTransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFPositioningInfoTransfer) { _cached_encoder_for_AMFPositioningInfoTransfer = function (value: AMFPositioningInfoTransfer, elGetter: $.ASN1Encoder<AMFPositioningInfoTransfer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.nRPPaMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.nRPPaMessage, $.BER)),
            /* IF_ABSENT  */ ((value.lPPMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.lPPMessage, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.lcsCorrelationId, $.BER),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFPositioningInfoTransfer(value, elGetter);
}


/* eslint-enable */
