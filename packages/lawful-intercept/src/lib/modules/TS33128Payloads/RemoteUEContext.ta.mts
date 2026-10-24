/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUEIDFormat, _decode_RemoteUEIDFormat, _encode_RemoteUEIDFormat, _enum_for_RemoteUEIDFormat } from "../TS33128Payloads/RemoteUEIDFormat.ta.mjs";
// export { RemoteUEIDFormat, _enum_for_RemoteUEIDFormat, RemoteUEIDFormat_nAI /* IMPORTED_LONG_ENUMERATION_ITEM */, nAI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RemoteUEIDFormat_sixtyFourBitString /* IMPORTED_LONG_ENUMERATION_ITEM */, sixtyFourBitString /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RemoteUEIDFormat, _encode_RemoteUEIDFormat } from "../TS33128Payloads/RemoteUEIDFormat.ta.mjs";
import { RemoteUEIDType, _decode_RemoteUEIDType, _encode_RemoteUEIDType, _enum_for_RemoteUEIDType } from "../TS33128Payloads/RemoteUEIDType.ta.mjs";
// export { RemoteUEIDType, _enum_for_RemoteUEIDType, RemoteUEIDType_uPPRUKID /* IMPORTED_LONG_ENUMERATION_ITEM */, uPPRUKID /* IMPORTED_SHORT_ENUMERATION_ITEM */, RemoteUEIDType_cPPRUKID /* IMPORTED_LONG_ENUMERATION_ITEM */, cPPRUKID /* IMPORTED_SHORT_ENUMERATION_ITEM */, RemoteUEIDType_iMEI /* IMPORTED_LONG_ENUMERATION_ITEM */, iMEI /* IMPORTED_SHORT_ENUMERATION_ITEM */, RemoteUEIDType_iMEISV /* IMPORTED_LONG_ENUMERATION_ITEM */, iMEISV /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RemoteUEIDType, _encode_RemoteUEIDType } from "../TS33128Payloads/RemoteUEIDType.ta.mjs";
import { RemoteUEID, _decode_RemoteUEID, _encode_RemoteUEID } from "../TS33128Payloads/RemoteUEID.ta.mjs";
// export { RemoteUEID, _decode_RemoteUEID, _encode_RemoteUEID } from "../TS33128Payloads/RemoteUEID.ta.mjs";
import { ProtocolUsedByRemoteUE, _decode_ProtocolUsedByRemoteUE, _encode_ProtocolUsedByRemoteUE, _enum_for_ProtocolUsedByRemoteUE } from "../TS33128Payloads/ProtocolUsedByRemoteUE.ta.mjs";
// export { ProtocolUsedByRemoteUE, _enum_for_ProtocolUsedByRemoteUE, ProtocolUsedByRemoteUE_noIPInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, noIPInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProtocolUsedByRemoteUE_iPv4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProtocolUsedByRemoteUE_iPv6 /* IMPORTED_LONG_ENUMERATION_ITEM */, iPv6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProtocolUsedByRemoteUE_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProtocolUsedByRemoteUE_ethernet /* IMPORTED_LONG_ENUMERATION_ITEM */, ethernet /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProtocolUsedByRemoteUE, _encode_ProtocolUsedByRemoteUE } from "../TS33128Payloads/ProtocolUsedByRemoteUE.ta.mjs";
import { AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../TS33128Payloads/AddressInformation.ta.mjs";
// export { AddressInformation, _decode_AddressInformation, _encode_AddressInformation } from "../TS33128Payloads/AddressInformation.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary RemoteUEContext
 * @description
 * 
 * Provides newly connected target 5G ProSe Remote UE information. Shall contain
 * the target remote UE context octets if sent in the Remote UE Report message.
 * Defined in TS 24.501 [13] clause 9.11.4.29.2.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEContext ::= SEQUENCE
 * {
 *     remoteUEIDFormat       [1] RemoteUEIDFormat,
 *     remoteUEIDType         [2] RemoteUEIDType,
 *     remoteUEID             [3] RemoteUEID,
 *     uDPPortRangeIndicator  [4] BOOLEAN,
 *     tCPPortRangeIndicator  [5] BOOLEAN,
 *     protocolUsedByRemoteUE [6] ProtocolUsedByRemoteUE,
 *     addressInformation     [7] AddressInformation OPTIONAL,
 *     hPLMNID                [8] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RemoteUEContext {
    /**
     * @summary `remoteUEIDFormat`.
     * @public
     * @readonly
     */
    readonly remoteUEIDFormat: RemoteUEIDFormat;
    /**
     * @summary `remoteUEIDType`.
     * @public
     * @readonly
     */
    readonly remoteUEIDType: RemoteUEIDType;
    /**
     * @summary `remoteUEID`.
     * @public
     * @readonly
     */
    readonly remoteUEID: RemoteUEID;
    /**
     * @summary `uDPPortRangeIndicator`.
     * @public
     * @readonly
     */
    readonly uDPPortRangeIndicator: BOOLEAN;
    /**
     * @summary `tCPPortRangeIndicator`.
     * @public
     * @readonly
     */
    readonly tCPPortRangeIndicator: BOOLEAN;
    /**
     * @summary `protocolUsedByRemoteUE`.
     * @public
     * @readonly
     */
    readonly protocolUsedByRemoteUE: ProtocolUsedByRemoteUE;
    /**
     * @summary `addressInformation`.
     * @public
     * @readonly
     */
    readonly addressInformation: OPTIONAL<AddressInformation>;
    /**
     * @summary `hPLMNID`.
     * @public
     * @readonly
     */
    readonly hPLMNID: OPTIONAL<PLMNID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        remoteUEIDFormat: RemoteUEIDFormat,
        remoteUEIDType: RemoteUEIDType,
        remoteUEID: RemoteUEID,
        uDPPortRangeIndicator: BOOLEAN,
        tCPPortRangeIndicator: BOOLEAN,
        protocolUsedByRemoteUE: ProtocolUsedByRemoteUE,
        addressInformation?: OPTIONAL<AddressInformation>,
        hPLMNID?: OPTIONAL<PLMNID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.remoteUEIDFormat = remoteUEIDFormat;
        this.remoteUEIDType = remoteUEIDType;
        this.remoteUEID = remoteUEID;
        this.uDPPortRangeIndicator = uDPPortRangeIndicator;
        this.tCPPortRangeIndicator = tCPPortRangeIndicator;
        this.protocolUsedByRemoteUE = protocolUsedByRemoteUE;
        this.addressInformation = addressInformation;
        this.hPLMNID = hPLMNID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RemoteUEContext
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUEContext`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUEContext`.
     * @returns {RemoteUEContext}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUEContext)]: (RemoteUEContext)[_K] }): RemoteUEContext {
        return new RemoteUEContext(_o.remoteUEIDFormat, _o.remoteUEIDType, _o.remoteUEID, _o.uDPPortRangeIndicator, _o.tCPPortRangeIndicator, _o.protocolUsedByRemoteUE, _o.addressInformation, _o.hPLMNID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `remoteUEIDFormat`
         * @public
         * @static
         */

    public static _enum_for_remoteUEIDFormat = _enum_for_RemoteUEIDFormat;        /**
         * @summary The enum used as the type of the component `remoteUEIDType`
         * @public
         * @static
         */

    public static _enum_for_remoteUEIDType = _enum_for_RemoteUEIDType;        /**
         * @summary The enum used as the type of the component `protocolUsedByRemoteUE`
         * @public
         * @static
         */

    public static _enum_for_protocolUsedByRemoteUE = _enum_for_ProtocolUsedByRemoteUE;
}

/**
 * @summary The Leading Root Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    new $.ComponentSpec("remoteUEIDFormat", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEIDType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("remoteUEID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uDPPortRangeIndicator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("tCPPortRangeIndicator", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("protocolUsedByRemoteUE", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("addressInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("hPLMNID", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUEContext
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUEContext: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUEContext: $.ASN1Decoder<RemoteUEContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEContext (el: _Element): RemoteUEContext {
    if (!_cached_decoder_for_RemoteUEContext) { _cached_decoder_for_RemoteUEContext = function (el: _Element): RemoteUEContext {
    let remoteUEIDFormat!: RemoteUEIDFormat;
    let remoteUEIDType!: RemoteUEIDType;
    let remoteUEID!: RemoteUEID;
    let uDPPortRangeIndicator!: BOOLEAN;
    let tCPPortRangeIndicator!: BOOLEAN;
    let protocolUsedByRemoteUE!: ProtocolUsedByRemoteUE;
    let addressInformation: OPTIONAL<AddressInformation>;
    let hPLMNID: OPTIONAL<PLMNID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "remoteUEIDFormat": (_el: _Element): void => { remoteUEIDFormat = $._decode_implicit<RemoteUEIDFormat>(() => _decode_RemoteUEIDFormat)(_el); },
        "remoteUEIDType": (_el: _Element): void => { remoteUEIDType = $._decode_implicit<RemoteUEIDType>(() => _decode_RemoteUEIDType)(_el); },
        "remoteUEID": (_el: _Element): void => { remoteUEID = $._decode_explicit<RemoteUEID>(() => _decode_RemoteUEID)(_el); },
        "uDPPortRangeIndicator": (_el: _Element): void => { uDPPortRangeIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "tCPPortRangeIndicator": (_el: _Element): void => { tCPPortRangeIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "protocolUsedByRemoteUE": (_el: _Element): void => { protocolUsedByRemoteUE = $._decode_implicit<ProtocolUsedByRemoteUE>(() => _decode_ProtocolUsedByRemoteUE)(_el); },
        "addressInformation": (_el: _Element): void => { addressInformation = $._decode_explicit<AddressInformation>(() => _decode_AddressInformation)(_el); },
        "hPLMNID": (_el: _Element): void => { hPLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RemoteUEContext,
        _extension_additions_list_spec_for_RemoteUEContext,
        _root_component_type_list_2_spec_for_RemoteUEContext,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RemoteUEContext(
        remoteUEIDFormat,
        remoteUEIDType,
        remoteUEID,
        uDPPortRangeIndicator,
        tCPPortRangeIndicator,
        protocolUsedByRemoteUE,
        addressInformation,
        hPLMNID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RemoteUEContext(el);
}

let _cached_encoder_for_RemoteUEContext: $.ASN1Encoder<RemoteUEContext> | null = null;

/**
 * @summary Encodes a(n) RemoteUEContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEContext, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEContext (value: RemoteUEContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEContext) { _cached_encoder_for_RemoteUEContext = function (value: RemoteUEContext, elGetter: $.ASN1Encoder<RemoteUEContext>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RemoteUEIDFormat, $.BER)(value.remoteUEIDFormat, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_RemoteUEIDType, $.BER)(value.remoteUEIDType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_RemoteUEID, $.BER)(value.remoteUEID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.uDPPortRangeIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.tCPPortRangeIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_ProtocolUsedByRemoteUE, $.BER)(value.protocolUsedByRemoteUE, $.BER);
    if (value.addressInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_AddressInformation, $.BER)(value.addressInformation, $.BER);
    }
    if (value.hPLMNID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PLMNID, $.BER)(value.hPLMNID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RemoteUEContext(value, elGetter);
}


/* eslint-enable */
