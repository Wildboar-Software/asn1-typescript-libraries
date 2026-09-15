/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyBCDNumber, _decode_CalledPartyBCDNumber, _encode_CalledPartyBCDNumber } from "../CAP-datatypes/CalledPartyBCDNumber.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type SMS_AddressString, _decode_SMS_AddressString, _encode_SMS_AddressString } from "../CAP-datatypes/SMS-AddressString.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary ConnectSMSArg
 * @description
 *
 * Argument of ConnectSMS: replacement calling party, destination,
 * and SMSC address for subsequent SM routing or delivery.
 * OPTIONAL presence follows 3GPP TS 23.078 IFs.
 * (3GPP TS 29.078 V19.0.0 clause 12.1.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectSMSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     callingPartysNumber            [0] SMS-AddressString            OPTIONAL,
 *     destinationSubscriberNumber        [1] CalledPartyBCDNumber {bound}        OPTIONAL,
 *     sMSCAddress                [2] ISDN-AddressString            OPTIONAL,
 *     extensions                [10] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ConnectSMSArg {
    constructor (
        /**
         * @summary `callingPartysNumber`.
         * @description
         *
         * Sets the Calling Party Number used in the network (originating
         * address shown to the receiving party).
         * (3GPP TS 29.078 V19.0.0 clause 12.1.1.1).
         *
         * @public
         * @readonly
         */
        readonly callingPartysNumber: OPTIONAL<SMS_AddressString>,
        /**
         * @summary `destinationSubscriberNumber`.
         * @description
         *
         * Destination address to which the SMSC shall route the Short
         * Message. (3GPP TS 29.078 V19.0.0 clause 12.1.1.1).
         *
         * @public
         * @readonly
         */
        readonly destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>,
        /**
         * @summary `sMSCAddress`.
         * @description
         *
         * SMSC address towards which the Short Message shall be routed.
         * (3GPP TS 29.078 V19.0.0 clause 12.1.1.1).
         *
         * @public
         * @readonly
         */
        readonly sMSCAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ConnectSMSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectSMSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectSMSArg`.
     * @returns {ConnectSMSArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectSMSArg)]: (ConnectSMSArg)[_K] }): ConnectSMSArg {
        return new ConnectSMSArg(_o.callingPartysNumber, _o.destinationSubscriberNumber, _o.sMSCAddress, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callingPartysNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationSubscriberNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sMSCAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectSMSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectSMSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectSMSArg: $.ASN1Decoder<ConnectSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectSMSArg (el: _Element): ConnectSMSArg {
    if (!_cached_decoder_for_ConnectSMSArg) { _cached_decoder_for_ConnectSMSArg = function (el: _Element): ConnectSMSArg {
    let callingPartysNumber: OPTIONAL<SMS_AddressString>;
    let destinationSubscriberNumber: OPTIONAL<CalledPartyBCDNumber>;
    let sMSCAddress: OPTIONAL<ISDN_AddressString>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callingPartysNumber": (_el: _Element): void => { callingPartysNumber = $._decode_implicit<SMS_AddressString>(() => _decode_SMS_AddressString)(_el); },
        "destinationSubscriberNumber": (_el: _Element): void => { destinationSubscriberNumber = $._decode_implicit<CalledPartyBCDNumber>(() => _decode_CalledPartyBCDNumber)(_el); },
        "sMSCAddress": (_el: _Element): void => { sMSCAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectSMSArg,
        _extension_additions_list_spec_for_ConnectSMSArg,
        _root_component_type_list_2_spec_for_ConnectSMSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConnectSMSArg(
        callingPartysNumber,
        destinationSubscriberNumber,
        sMSCAddress,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConnectSMSArg(el);
}

let _cached_encoder_for_ConnectSMSArg: $.ASN1Encoder<ConnectSMSArg> | null = null;

/**
 * @summary Encodes a(n) ConnectSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectSMSArg (value: ConnectSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectSMSArg) { _cached_encoder_for_ConnectSMSArg = function (value: ConnectSMSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callingPartysNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SMS_AddressString, $.BER)(value.callingPartysNumber, $.BER)),
            /* IF_ABSENT  */ ((value.destinationSubscriberNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBCDNumber, $.BER)(value.destinationSubscriberNumber, $.BER)),
            /* IF_ABSENT  */ ((value.sMSCAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.sMSCAddress, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectSMSArg(value, elGetter);
}


/* eslint-enable */
