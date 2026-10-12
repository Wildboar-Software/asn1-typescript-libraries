/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { N9HRMessageCause, _decode_N9HRMessageCause, _encode_N9HRMessageCause, _enum_for_N9HRMessageCause } from "../TS33128Payloads/N9HRMessageCause.ta.mjs";
// export { N9HRMessageCause, _enum_for_N9HRMessageCause, N9HRMessageCause_pDUSessionEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_pDUSessionModified /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionModified /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_pDUSessionReleased /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionReleased /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_updatedLocationAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, updatedLocationAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_sMFChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, sMFChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, N9HRMessageCause_hRLIEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, hRLIEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_N9HRMessageCause, _encode_N9HRMessageCause } from "../TS33128Payloads/N9HRMessageCause.ta.mjs";


/**
 * @summary N9HRPDUSessionInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N9HRPDUSessionInfo ::= SEQUENCE
 * {
 *     sUPI                            [1] SUPI,
 *     pEI                             [2] PEI OPTIONAL,
 *     pDUSessionID                    [3] PDUSessionID,
 *     location                        [4] Location OPTIONAL,
 *     sNSSAI                          [5] SNSSAI OPTIONAL,
 *     dNN                             [6] DNN OPTIONAL,
 *     messageCause                    [7] N9HRMessageCause
 * }
 * ```
 * 
 * @class
 */
export
class N9HRPDUSessionInfo {
    /**
     * @summary `sUPI`.
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `pEI`.
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `pDUSessionID`.
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `sNSSAI`.
     * @public
     * @readonly
     */
    readonly sNSSAI: OPTIONAL<SNSSAI>;
    /**
     * @summary `dNN`.
     * @public
     * @readonly
     */
    readonly dNN: OPTIONAL<DNN>;
    /**
     * @summary `messageCause`.
     * @public
     * @readonly
     */
    readonly messageCause: N9HRMessageCause;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        pEI: OPTIONAL<PEI>,
        pDUSessionID: PDUSessionID,
        location: OPTIONAL<Location>,
        sNSSAI: OPTIONAL<SNSSAI>,
        dNN: OPTIONAL<DNN>,
        messageCause: N9HRMessageCause,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.pEI = pEI;
        this.pDUSessionID = pDUSessionID;
        this.location = location;
        this.sNSSAI = sNSSAI;
        this.dNN = dNN;
        this.messageCause = messageCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a N9HRPDUSessionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `N9HRPDUSessionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `N9HRPDUSessionInfo`.
     * @returns {N9HRPDUSessionInfo}
     */
    public static _from_object (_o: { [_K in keyof (N9HRPDUSessionInfo)]: (N9HRPDUSessionInfo)[_K] }): N9HRPDUSessionInfo {
        return new N9HRPDUSessionInfo(_o.sUPI, _o.pEI, _o.pDUSessionID, _o.location, _o.sNSSAI, _o.dNN, _o.messageCause, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `messageCause`
         * @public
         * @static
         */

    public static _enum_for_messageCause = _enum_for_N9HRMessageCause;
}

/**
 * @summary The Leading Root Component Types of N9HRPDUSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_N9HRPDUSessionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dNN", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("messageCause", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of N9HRPDUSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_N9HRPDUSessionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of N9HRPDUSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_N9HRPDUSessionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_N9HRPDUSessionInfo: $.ASN1Decoder<N9HRPDUSessionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) N9HRPDUSessionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_N9HRPDUSessionInfo (el: _Element): N9HRPDUSessionInfo {
    if (!_cached_decoder_for_N9HRPDUSessionInfo) { _cached_decoder_for_N9HRPDUSessionInfo = function (el: _Element): N9HRPDUSessionInfo {
    let sUPI!: SUPI;
    let pEI: OPTIONAL<PEI>;
    let pDUSessionID!: PDUSessionID;
    let location: OPTIONAL<Location>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let dNN: OPTIONAL<DNN>;
    let messageCause!: N9HRMessageCause;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "messageCause": (_el: _Element): void => { messageCause = $._decode_implicit<N9HRMessageCause>(() => _decode_N9HRMessageCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_N9HRPDUSessionInfo,
        _extension_additions_list_spec_for_N9HRPDUSessionInfo,
        _root_component_type_list_2_spec_for_N9HRPDUSessionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new N9HRPDUSessionInfo(
        sUPI,
        pEI,
        pDUSessionID,
        location,
        sNSSAI,
        dNN,
        messageCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_N9HRPDUSessionInfo(el);
}

let _cached_encoder_for_N9HRPDUSessionInfo: $.ASN1Encoder<N9HRPDUSessionInfo> | null = null;

/**
 * @summary Encodes a(n) N9HRPDUSessionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The N9HRPDUSessionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_N9HRPDUSessionInfo (value: N9HRPDUSessionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_N9HRPDUSessionInfo) { _cached_encoder_for_N9HRPDUSessionInfo = function (value: N9HRPDUSessionInfo, elGetter: $.ASN1Encoder<N9HRPDUSessionInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (value.sNSSAI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    }
    if (value.dNN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_DNN, $.BER)(value.dNN, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_N9HRMessageCause, $.BER)(value.messageCause, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_N9HRPDUSessionInfo(value, elGetter);
}


/* eslint-enable */
