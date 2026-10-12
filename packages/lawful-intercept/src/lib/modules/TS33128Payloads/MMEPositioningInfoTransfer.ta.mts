/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";


/**
 * @summary MMEPositioningInfoTransfer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEPositioningInfoTransfer ::= SEQUENCE
 * {
 *     iMSI                [1] IMSI,
 *     iMEI                [2] IMEI OPTIONAL,
 *     mSISDN              [3] MSISDN OPTIONAL,
 *     gUTI                [4] GUTI OPTIONAL,
 *     lPPaMessage         [5] OCTET STRING OPTIONAL,
 *     lPPMessage          [6] OCTET STRING OPTIONAL,
 *     mMELCSCorrelationId [7] OCTET STRING (SIZE(4))
 * }
 * ```
 * 
 * @class
 */
export
class MMEPositioningInfoTransfer {
    /**
     * @summary `iMSI`.
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `iMEI`.
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `mSISDN`.
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `gUTI`.
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<GUTI>;
    /**
     * @summary `lPPaMessage`.
     * @public
     * @readonly
     */
    readonly lPPaMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lPPMessage`.
     * @public
     * @readonly
     */
    readonly lPPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMELCSCorrelationId`.
     * @public
     * @readonly
     */
    readonly mMELCSCorrelationId: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        iMEI: OPTIONAL<IMEI>,
        mSISDN: OPTIONAL<MSISDN>,
        gUTI: OPTIONAL<GUTI>,
        lPPaMessage: OPTIONAL<OCTET_STRING>,
        lPPMessage: OPTIONAL<OCTET_STRING>,
        mMELCSCorrelationId: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.mSISDN = mSISDN;
        this.gUTI = gUTI;
        this.lPPaMessage = lPPaMessage;
        this.lPPMessage = lPPMessage;
        this.mMELCSCorrelationId = mMELCSCorrelationId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMEPositioningInfoTransfer
     * @description
     * 
     * This takes an `object` and converts it to a `MMEPositioningInfoTransfer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMEPositioningInfoTransfer`.
     * @returns {MMEPositioningInfoTransfer}
     */
    public static _from_object (_o: { [_K in keyof (MMEPositioningInfoTransfer)]: (MMEPositioningInfoTransfer)[_K] }): MMEPositioningInfoTransfer {
        return new MMEPositioningInfoTransfer(_o.iMSI, _o.iMEI, _o.mSISDN, _o.gUTI, _o.lPPaMessage, _o.lPPMessage, _o.mMELCSCorrelationId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMEPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMEPositioningInfoTransfer: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lPPaMessage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("lPPMessage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mMELCSCorrelationId", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MMEPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMEPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMEPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMEPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMEPositioningInfoTransfer: $.ASN1Decoder<MMEPositioningInfoTransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEPositioningInfoTransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEPositioningInfoTransfer (el: _Element): MMEPositioningInfoTransfer {
    if (!_cached_decoder_for_MMEPositioningInfoTransfer) { _cached_decoder_for_MMEPositioningInfoTransfer = function (el: _Element): MMEPositioningInfoTransfer {
    let iMSI!: IMSI;
    let iMEI: OPTIONAL<IMEI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let gUTI: OPTIONAL<GUTI>;
    let lPPaMessage: OPTIONAL<OCTET_STRING>;
    let lPPMessage: OPTIONAL<OCTET_STRING>;
    let mMELCSCorrelationId!: OCTET_STRING;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<GUTI>(() => _decode_GUTI)(_el); },
        "lPPaMessage": (_el: _Element): void => { lPPaMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lPPMessage": (_el: _Element): void => { lPPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMELCSCorrelationId": (_el: _Element): void => {
            mMELCSCorrelationId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (mMELCSCorrelationId.length < 4 || mMELCSCorrelationId.length > 4) {
                throw new ASN1SizeError("MMEPositioningInfoTransfer.mMELCSCorrelationId violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMEPositioningInfoTransfer,
        _extension_additions_list_spec_for_MMEPositioningInfoTransfer,
        _root_component_type_list_2_spec_for_MMEPositioningInfoTransfer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMEPositioningInfoTransfer(
        iMSI,
        iMEI,
        mSISDN,
        gUTI,
        lPPaMessage,
        lPPMessage,
        mMELCSCorrelationId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMEPositioningInfoTransfer(el);
}

let _cached_encoder_for_MMEPositioningInfoTransfer: $.ASN1Encoder<MMEPositioningInfoTransfer> | null = null;

/**
 * @summary Encodes a(n) MMEPositioningInfoTransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEPositioningInfoTransfer, encoded as an ASN.1 Element.
 */
export
function _encode_MMEPositioningInfoTransfer (value: MMEPositioningInfoTransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEPositioningInfoTransfer) { _cached_encoder_for_MMEPositioningInfoTransfer = function (value: MMEPositioningInfoTransfer, elGetter: $.ASN1Encoder<MMEPositioningInfoTransfer>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GUTI, $.BER)(value.gUTI, $.BER);
    }
    if (value.lPPaMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.lPPaMessage, $.BER);
    }
    if (value.lPPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.lPPMessage, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.mMELCSCorrelationId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMEPositioningInfoTransfer(value, elGetter);
}


/* eslint-enable */
