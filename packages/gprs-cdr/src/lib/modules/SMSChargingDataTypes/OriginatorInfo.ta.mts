/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMAddressInfo, _decode_SMAddressInfo, _encode_SMAddressInfo } from "../SMSChargingDataTypes/SMAddressInfo.ta.mjs";
import { SMInterface, _decode_SMInterface, _encode_SMInterface } from "../SMSChargingDataTypes/SMInterface.ta.mjs";


/**
 * @summary OriginatorInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorInfo ::= SEQUENCE {
 *    originatorIMSI              [0] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    originatorMSISDN            [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    originatorOtherAddress      [2] IMPLICIT SMAddressInfo OPTIONAL,
 *    originatorSCCPAddress       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    originatorReceivedAddress   [4] IMPLICIT SMAddressInfo OPTIONAL,
 *    sMOriginatorInterface       [5] IMPLICIT SMInterface OPTIONAL,
 *    sMOriginatorProtocolID      [6] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class OriginatorInfo {
    /**
     * @summary `originatorIMSI`.
     * @public
     * @readonly
     */
    readonly originatorIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorMSISDN`.
     * @public
     * @readonly
     */
    readonly originatorMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorOtherAddress`.
     * @public
     * @readonly
     */
    readonly originatorOtherAddress: OPTIONAL<SMAddressInfo>;
    /**
     * @summary `originatorSCCPAddress`.
     * @public
     * @readonly
     */
    readonly originatorSCCPAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `originatorReceivedAddress`.
     * @public
     * @readonly
     */
    readonly originatorReceivedAddress: OPTIONAL<SMAddressInfo>;
    /**
     * @summary `sMOriginatorInterface`.
     * @public
     * @readonly
     */
    readonly sMOriginatorInterface: OPTIONAL<SMInterface>;
    /**
     * @summary `sMOriginatorProtocolID`.
     * @public
     * @readonly
     */
    readonly sMOriginatorProtocolID: OPTIONAL<OCTET_STRING>;

    constructor (
        originatorIMSI: OPTIONAL<OCTET_STRING>,
        originatorMSISDN: OPTIONAL<OCTET_STRING>,
        originatorOtherAddress: OPTIONAL<SMAddressInfo>,
        originatorSCCPAddress: OPTIONAL<OCTET_STRING>,
        originatorReceivedAddress: OPTIONAL<SMAddressInfo>,
        sMOriginatorInterface: OPTIONAL<SMInterface>,
        sMOriginatorProtocolID: OPTIONAL<OCTET_STRING>
    ) {
        this.originatorIMSI = originatorIMSI;
        this.originatorMSISDN = originatorMSISDN;
        this.originatorOtherAddress = originatorOtherAddress;
        this.originatorSCCPAddress = originatorSCCPAddress;
        this.originatorReceivedAddress = originatorReceivedAddress;
        this.sMOriginatorInterface = sMOriginatorInterface;
        this.sMOriginatorProtocolID = sMOriginatorProtocolID;
    
        if (this.originatorIMSI !== undefined && (this.originatorIMSI.length < 3 || this.originatorIMSI.length > 8)) {
            throw new ASN1SizeError("OriginatorInfo.originatorIMSI violates SIZE constraint");
        }
        if (this.originatorMSISDN !== undefined && (this.originatorMSISDN.length < 1 || this.originatorMSISDN.length > 9)) {
            throw new ASN1SizeError("OriginatorInfo.originatorMSISDN violates SIZE constraint");
        }
        if (this.originatorSCCPAddress !== undefined && (this.originatorSCCPAddress.length < 1 || this.originatorSCCPAddress.length > 20)) {
            throw new ASN1SizeError("OriginatorInfo.originatorSCCPAddress violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a OriginatorInfo
     * @description
     * 
     * This takes an `object` and converts it to a `OriginatorInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorInfo`.
     * @returns {OriginatorInfo}
     */
    public static _from_object (_o: { [_K in keyof (OriginatorInfo)]: (OriginatorInfo)[_K] }): OriginatorInfo {
        return new OriginatorInfo(_o.originatorIMSI, _o.originatorMSISDN, _o.originatorOtherAddress, _o.originatorSCCPAddress, _o.originatorReceivedAddress, _o.sMOriginatorInterface, _o.sMOriginatorProtocolID);
    }


}

/**
 * @summary The Leading Root Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("originatorIMSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originatorMSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originatorOtherAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatorSCCPAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originatorReceivedAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMOriginatorInterface", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sMOriginatorProtocolID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginatorInfo: $.ASN1Decoder<OriginatorInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatorInfo (el: _Element): OriginatorInfo {
    if (!_cached_decoder_for_OriginatorInfo) { _cached_decoder_for_OriginatorInfo = function (el: _Element): OriginatorInfo {
    let originatorIMSI: OPTIONAL<OCTET_STRING>;
    let originatorMSISDN: OPTIONAL<OCTET_STRING>;
    let originatorOtherAddress: OPTIONAL<SMAddressInfo>;
    let originatorSCCPAddress: OPTIONAL<OCTET_STRING>;
    let originatorReceivedAddress: OPTIONAL<SMAddressInfo>;
    let sMOriginatorInterface: OPTIONAL<SMInterface>;
    let sMOriginatorProtocolID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "originatorIMSI": (_el: _Element): void => { originatorIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorMSISDN": (_el: _Element): void => { originatorMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorOtherAddress": (_el: _Element): void => { originatorOtherAddress = $._decode_implicit<SMAddressInfo>(() => _decode_SMAddressInfo)(_el); },
        "originatorSCCPAddress": (_el: _Element): void => { originatorSCCPAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorReceivedAddress": (_el: _Element): void => { originatorReceivedAddress = $._decode_implicit<SMAddressInfo>(() => _decode_SMAddressInfo)(_el); },
        "sMOriginatorInterface": (_el: _Element): void => { sMOriginatorInterface = $._decode_implicit<SMInterface>(() => _decode_SMInterface)(_el); },
        "sMOriginatorProtocolID": (_el: _Element): void => { sMOriginatorProtocolID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginatorInfo,
        _extension_additions_list_spec_for_OriginatorInfo,
        _root_component_type_list_2_spec_for_OriginatorInfo,
        undefined,
    );
    return new OriginatorInfo(
        originatorIMSI,
        originatorMSISDN,
        originatorOtherAddress,
        originatorSCCPAddress,
        originatorReceivedAddress,
        sMOriginatorInterface,
        sMOriginatorProtocolID
    );
}; }
    return _cached_decoder_for_OriginatorInfo(el);
}

let _cached_encoder_for_OriginatorInfo: $.ASN1Encoder<OriginatorInfo> | null = null;

/**
 * @summary Encodes a(n) OriginatorInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorInfo, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatorInfo (value: OriginatorInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatorInfo) { _cached_encoder_for_OriginatorInfo = function (value: OriginatorInfo, _elGetter: $.ASN1Encoder<OriginatorInfo>): _Element {
    const _components: _Element[] = [];
    if (value.originatorIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.originatorIMSI, $.BER));
    }
    if (value.originatorMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.originatorMSISDN, $.BER));
    }
    if (value.originatorOtherAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMAddressInfo, $.BER)(value.originatorOtherAddress, $.BER));
    }
    if (value.originatorSCCPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.originatorSCCPAddress, $.BER));
    }
    if (value.originatorReceivedAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMAddressInfo, $.BER)(value.originatorReceivedAddress, $.BER));
    }
    if (value.sMOriginatorInterface !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMInterface, $.BER)(value.sMOriginatorInterface, $.BER));
    }
    if (value.sMOriginatorProtocolID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.sMOriginatorProtocolID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OriginatorInfo(value, elGetter);
}


/* eslint-enable */
