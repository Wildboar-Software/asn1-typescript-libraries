/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMAddress, _decode_SMAddress, _encode_SMAddress } from "../CHFChargingDataTypes/SMAddress.ta.mjs";
import { SMInterface, _decode_SMInterface, _encode_SMInterface } from "../CHFChargingDataTypes/SMInterface.ta.mjs";


/**
 * @summary RecipientInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientInfos ::= SEQUENCE {
 *    recipientIMSI              [0] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    recipientMSISDN            [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recipientOtherAddress      [2] IMPLICIT SMAddress OPTIONAL,
 *    recipientSCCPAddress       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recipientReceivedAddress   [4] IMPLICIT SMAddress OPTIONAL,
 *    sMDestinationInterface     [5] IMPLICIT SMInterface OPTIONAL,
 *    sMRecipientProtocolID      [6] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RecipientInfos {
    /**
     * @summary `recipientIMSI`.
     * @public
     * @readonly
     */
    readonly recipientIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientMSISDN`.
     * @public
     * @readonly
     */
    readonly recipientMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientOtherAddress`.
     * @public
     * @readonly
     */
    readonly recipientOtherAddress: OPTIONAL<SMAddress>;
    /**
     * @summary `recipientSCCPAddress`.
     * @public
     * @readonly
     */
    readonly recipientSCCPAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientReceivedAddress`.
     * @public
     * @readonly
     */
    readonly recipientReceivedAddress: OPTIONAL<SMAddress>;
    /**
     * @summary `sMDestinationInterface`.
     * @public
     * @readonly
     */
    readonly sMDestinationInterface: OPTIONAL<SMInterface>;
    /**
     * @summary `sMRecipientProtocolID`.
     * @public
     * @readonly
     */
    readonly sMRecipientProtocolID: OPTIONAL<OCTET_STRING>;

    constructor (
        recipientIMSI?: OPTIONAL<OCTET_STRING>,
        recipientMSISDN?: OPTIONAL<OCTET_STRING>,
        recipientOtherAddress?: OPTIONAL<SMAddress>,
        recipientSCCPAddress?: OPTIONAL<OCTET_STRING>,
        recipientReceivedAddress?: OPTIONAL<SMAddress>,
        sMDestinationInterface?: OPTIONAL<SMInterface>,
        sMRecipientProtocolID?: OPTIONAL<OCTET_STRING>
    ) {
        this.recipientIMSI = recipientIMSI;
        this.recipientMSISDN = recipientMSISDN;
        this.recipientOtherAddress = recipientOtherAddress;
        this.recipientSCCPAddress = recipientSCCPAddress;
        this.recipientReceivedAddress = recipientReceivedAddress;
        this.sMDestinationInterface = sMDestinationInterface;
        this.sMRecipientProtocolID = sMRecipientProtocolID;
    
        if (this.recipientIMSI !== undefined && (this.recipientIMSI.length < 3 || this.recipientIMSI.length > 8)) {
            throw new ASN1SizeError("RecipientInfos.recipientIMSI violates SIZE constraint");
        }
        if (this.recipientMSISDN !== undefined && (this.recipientMSISDN.length < 1 || this.recipientMSISDN.length > 9)) {
            throw new ASN1SizeError("RecipientInfos.recipientMSISDN violates SIZE constraint");
        }
        if (this.recipientSCCPAddress !== undefined && (this.recipientSCCPAddress.length < 1 || this.recipientSCCPAddress.length > 20)) {
            throw new ASN1SizeError("RecipientInfos.recipientSCCPAddress violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RecipientInfos
     * @description
     * 
     * This takes an `object` and converts it to a `RecipientInfos`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientInfos`.
     * @returns {RecipientInfos}
     */
    public static _from_object (_o: { [_K in keyof (RecipientInfos)]: (RecipientInfos)[_K] }): RecipientInfos {
        return new RecipientInfos(_o.recipientIMSI, _o.recipientMSISDN, _o.recipientOtherAddress, _o.recipientSCCPAddress, _o.recipientReceivedAddress, _o.sMDestinationInterface, _o.sMRecipientProtocolID);
    }


}

/**
 * @summary The Leading Root Component Types of RecipientInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecipientInfos: $.ComponentSpec[] = [
    new $.ComponentSpec("recipientIMSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientOtherAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recipientSCCPAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientReceivedAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMDestinationInterface", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sMRecipientProtocolID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RecipientInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecipientInfos: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecipientInfos
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecipientInfos: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecipientInfos: $.ASN1Decoder<RecipientInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientInfos (el: _Element): RecipientInfos {
    if (!_cached_decoder_for_RecipientInfos) { _cached_decoder_for_RecipientInfos = function (el: _Element): RecipientInfos {
    let recipientIMSI: OPTIONAL<OCTET_STRING>;
    let recipientMSISDN: OPTIONAL<OCTET_STRING>;
    let recipientOtherAddress: OPTIONAL<SMAddress>;
    let recipientSCCPAddress: OPTIONAL<OCTET_STRING>;
    let recipientReceivedAddress: OPTIONAL<SMAddress>;
    let sMDestinationInterface: OPTIONAL<SMInterface>;
    let sMRecipientProtocolID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "recipientIMSI": (_el: _Element): void => { recipientIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientMSISDN": (_el: _Element): void => { recipientMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientOtherAddress": (_el: _Element): void => { recipientOtherAddress = $._decode_implicit<SMAddress>(() => _decode_SMAddress)(_el); },
        "recipientSCCPAddress": (_el: _Element): void => { recipientSCCPAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientReceivedAddress": (_el: _Element): void => { recipientReceivedAddress = $._decode_implicit<SMAddress>(() => _decode_SMAddress)(_el); },
        "sMDestinationInterface": (_el: _Element): void => { sMDestinationInterface = $._decode_implicit<SMInterface>(() => _decode_SMInterface)(_el); },
        "sMRecipientProtocolID": (_el: _Element): void => { sMRecipientProtocolID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecipientInfos,
        _extension_additions_list_spec_for_RecipientInfos,
        _root_component_type_list_2_spec_for_RecipientInfos,
        undefined,
    );
    return new RecipientInfos(
        recipientIMSI,
        recipientMSISDN,
        recipientOtherAddress,
        recipientSCCPAddress,
        recipientReceivedAddress,
        sMDestinationInterface,
        sMRecipientProtocolID
    );
}; }
    return _cached_decoder_for_RecipientInfos(el);
}

let _cached_encoder_for_RecipientInfos: $.ASN1Encoder<RecipientInfos> | null = null;

/**
 * @summary Encodes a(n) RecipientInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfos, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientInfos (value: RecipientInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientInfos) { _cached_encoder_for_RecipientInfos = function (value: RecipientInfos, _elGetter: $.ASN1Encoder<RecipientInfos>): _Element {
    const _components: _Element[] = [];
    if (value.recipientIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.recipientIMSI, $.BER));
    }
    if (value.recipientMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recipientMSISDN, $.BER));
    }
    if (value.recipientOtherAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMAddress, $.BER)(value.recipientOtherAddress, $.BER));
    }
    if (value.recipientSCCPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recipientSCCPAddress, $.BER));
    }
    if (value.recipientReceivedAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMAddress, $.BER)(value.recipientReceivedAddress, $.BER));
    }
    if (value.sMDestinationInterface !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMInterface, $.BER)(value.sMDestinationInterface, $.BER));
    }
    if (value.sMRecipientProtocolID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.sMRecipientProtocolID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RecipientInfos(value, elGetter);
}


/* eslint-enable */
