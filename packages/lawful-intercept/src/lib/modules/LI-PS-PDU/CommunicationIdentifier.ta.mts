/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NetworkIdentifier, _decode_NetworkIdentifier, _encode_NetworkIdentifier } from "../LI-PS-PDU/NetworkIdentifier.ta.mjs";
import * as UmtsHI2Operations from "../UmtsHI2Operations/index.mjs";
// export { NetworkIdentifier, _decode_NetworkIdentifier, _encode_NetworkIdentifier } from "../LI-PS-PDU/NetworkIdentifier.ta.mjs";
// export { CorrelationValues, _decode_CorrelationValues, _encode_CorrelationValues } from "../UmtsHI2Operations/CorrelationValues.ta.mjs";


/**
 * @summary CommunicationIdentifier
 * @description
 * 
 * Network identifier, communications identity number, and delivery country
 * code. The CIN identifies one communications session. All interception results
 * for that session share it, and two sessions for the same target identity
 * through the same operator and the same network element use different CINs.
 * Each service-specific standard lists the events that open a new session.
 *
 * The CIN is mandatory on HI2 and HI3, with one exception: an IRI may omit it
 * when the IRI is unrelated to any target communication session, is not
 * associated with any CC, and is not associated with any other IRI. A
 * target-location message generated while no call is in progress is the
 * specification's example. Transport of HI1 does not require the CIN.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationIdentifier ::= SEQUENCE
 * {
 *     networkIdentifier               [0] NetworkIdentifier,
 *     communicationIdentityNumber     [1] INTEGER (0..4294967295) OPTIONAL,
 *         -- in case of transport of HI1 messages not required
 *         -- Mandatory for CC and IRI, with certain exceptions (see clause 5.2.4)
 *     deliveryCountryCode             [2] PrintableString (SIZE (2)) OPTIONAL,
 *         -- see clause 5.2.4
 *     ...,
 *     cINExtension                    [3] UmtsHI2Operations.CorrelationValues OPTIONAL
 *         -- To be used when a single INTEGER is not sufficient to identify
 *         -- a particular session (see clause 5.2.4)
 * }
 * ```
 * 
 * @class
 */
export
class CommunicationIdentifier {
    /**
     * @summary `networkIdentifier`.
     * @description
     *
     * Operator that performs the intercept, and optionally the mediation
     * function or the intercepting network element. The network identifier has
     * to be unique within the CSP.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly networkIdentifier: NetworkIdentifier;
    /**
     * @summary `communicationIdentityNumber`.
     * @description
     *
     * Integer half of the CIN, in 0..4294967295. Required for CC and IRI except
     * the IRI case in clause 5.2.4, and not required for HI1. When the
     * service-specific standard permits `cINExtension` and that extension alone
     * identifies the session, this integer may be absent. Otherwise, where the
     * extension is used, the CIN is the combination of both fields.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentityNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `deliveryCountryCode`.
     * @description
     *
     * Two-letter ISO 3166-1 code for the geographical location of the mediation
     * function. It is what makes the communication identifier internationally
     * unique. It should be present when the mediation function and the LEMF are
     * in different countries.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly deliveryCountryCode: OPTIONAL<PrintableString>;
    /**
     * @summary `cINExtension`.
     * @description
     *
     * Extra correlation values, from the 3GPP UMTS HI2 module, used only where
     * the service-specific standard permits it. The integer CIN in ETSI TS 101
     * 671 is not always flexible enough to identify a session. If this
     * extension is itself a unique session identifier,
     * `communicationIdentityNumber` need not be present; otherwise the CIN is
     * the combination.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly cINExtension: OPTIONAL<UmtsHI2Operations.CorrelationValues>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.4.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        networkIdentifier: NetworkIdentifier,
        communicationIdentityNumber?: OPTIONAL<INTEGER>,
        deliveryCountryCode?: OPTIONAL<PrintableString>,
        cINExtension?: OPTIONAL<UmtsHI2Operations.CorrelationValues>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.networkIdentifier = networkIdentifier;
        this.communicationIdentityNumber = communicationIdentityNumber;
        this.deliveryCountryCode = deliveryCountryCode;
        this.cINExtension = cINExtension;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CommunicationIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationIdentifier`.
     * @returns {CommunicationIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationIdentifier)]: (CommunicationIdentifier)[_K] }): CommunicationIdentifier {
        return new CommunicationIdentifier(_o.networkIdentifier, _o.communicationIdentityNumber, _o.deliveryCountryCode, _o.cINExtension, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("networkIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("communicationIdentityNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deliveryCountryCode", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("cINExtension", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_CommunicationIdentifier: $.ASN1Decoder<CommunicationIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationIdentifier (el: _Element): CommunicationIdentifier {
    if (!_cached_decoder_for_CommunicationIdentifier) { _cached_decoder_for_CommunicationIdentifier = function (el: _Element): CommunicationIdentifier {
    let networkIdentifier!: NetworkIdentifier;
    let communicationIdentityNumber: OPTIONAL<INTEGER>;
    let deliveryCountryCode: OPTIONAL<PrintableString>;
    let cINExtension: OPTIONAL<UmtsHI2Operations.CorrelationValues>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<NetworkIdentifier>(() => _decode_NetworkIdentifier)(_el); },
        "communicationIdentityNumber": (_el: _Element): void => {
            communicationIdentityNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof communicationIdentityNumber === "bigint" ? communicationIdentityNumber : BigInt(communicationIdentityNumber);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("CommunicationIdentifier.communicationIdentityNumber violates INTEGER range");
            }
        },
        "deliveryCountryCode": (_el: _Element): void => {
            deliveryCountryCode = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el);
            if (deliveryCountryCode.length < 2 || deliveryCountryCode.length > 2) {
                throw new ASN1SizeError("CommunicationIdentifier.deliveryCountryCode violates SIZE constraint");
            }
        },
        "cINExtension": (_el: _Element): void => { cINExtension = $._decode_explicit<UmtsHI2Operations.CorrelationValues>(() => UmtsHI2Operations._decode_CorrelationValues)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommunicationIdentifier,
        _extension_additions_list_spec_for_CommunicationIdentifier,
        _root_component_type_list_2_spec_for_CommunicationIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommunicationIdentifier(
        networkIdentifier,
        communicationIdentityNumber,
        deliveryCountryCode,
        cINExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommunicationIdentifier(el);
}

let _cached_encoder_for_CommunicationIdentifier: $.ASN1Encoder<CommunicationIdentifier> | null = null;

/**
 * @summary Encodes a(n) CommunicationIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationIdentifier (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationIdentifier) { _cached_encoder_for_CommunicationIdentifier = function (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<CommunicationIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NetworkIdentifier, $.BER)(value.networkIdentifier, $.BER);
    if (value.communicationIdentityNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.communicationIdentityNumber, $.BER);
    }
    if (value.deliveryCountryCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodePrintableString, $.BER)(value.deliveryCountryCode, $.BER);
    }
    if (value.cINExtension !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => UmtsHI2Operations._encode_CorrelationValues, $.BER)(value.cINExtension, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommunicationIdentifier(value, elGetter);
}


/* eslint-enable */
