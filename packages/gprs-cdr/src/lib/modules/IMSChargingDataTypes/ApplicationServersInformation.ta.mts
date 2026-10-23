/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../IMSChargingDataTypes/NodeAddress.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";
import { Status, _decode_Status, _encode_Status, _enum_for_Status } from "../IMSChargingDataTypes/Status.ta.mjs";


/**
 * @summary ApplicationServersInformation
 * @description
 *
 * Application servers addressed during the session, and the called party
 * address when an AS determined it (clause 6.3.1.2). On an S-CSCF CDR the
 * status records a 4xx, a 5xx, or a timeout from that AS. A transit
 * network that provides IMS application services uses the same group
 * (clause 6.1.3.14).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This is a grouped CDR field containing the fields: "Application Server
 * Involved", "Application Provided Called Parties" and "Status".
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.5.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationServersInformation ::= SEQUENCE {
 *    applicationServersInvolved         [0] NodeAddress OPTIONAL,
 *    applicationProvidedCalledParties   [1] IMPLICIT SEQUENCE  OF
 *       InvolvedParty OPTIONAL,
 *    sTatus                             [2] IMPLICIT Status OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ApplicationServersInformation {
    /**
     * @summary `applicationServersInvolved`.
     * @description
     *
     * Holds the ASs (if any) identified by the SIP URLs.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.6.
     *
     * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly applicationServersInvolved: OPTIONAL<NodeAddress>;
    /**
     * @summary `applicationProvidedCalledParties`.
     * @description
     *
     * Holds a list of the Called party address(es), if the address(es) are
     * determined by an AS (SIP URL, E.164…).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.4.
     *
     * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly applicationProvidedCalledParties: OPTIONAL<InvolvedParty[]>;
    /**
     * @summary `sTatus`.
     * @description
     *
     * Abnormal status of an application server when that AS returns a SIP 4xx
     * or 5xx, or times out, toward the S-CSCF during the session (clause
     * 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly sTatus: OPTIONAL<Status>;

    constructor (
        applicationServersInvolved?: OPTIONAL<NodeAddress>,
        applicationProvidedCalledParties?: OPTIONAL<InvolvedParty[]>,
        sTatus?: OPTIONAL<Status>
    ) {
        this.applicationServersInvolved = applicationServersInvolved;
        this.applicationProvidedCalledParties = applicationProvidedCalledParties;
        this.sTatus = sTatus;
    }

    /**
     * @summary Restructures an object into a ApplicationServersInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationServersInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationServersInformation`.
     * @returns {ApplicationServersInformation}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationServersInformation)]: (ApplicationServersInformation)[_K] }): ApplicationServersInformation {
        return new ApplicationServersInformation(_o.applicationServersInvolved, _o.applicationProvidedCalledParties, _o.sTatus);
    }

        /**
         * @summary The enum used as the type of the component `sTatus`
         * @public
         * @static
         */

    public static _enum_for_sTatus = _enum_for_Status;
}

/**
 * @summary The Leading Root Component Types of ApplicationServersInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationServersInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("applicationServersInvolved", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("applicationProvidedCalledParties", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sTatus", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ApplicationServersInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationServersInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationServersInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationServersInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationServersInformation: $.ASN1Decoder<ApplicationServersInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationServersInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationServersInformation (el: _Element): ApplicationServersInformation {
    if (!_cached_decoder_for_ApplicationServersInformation) { _cached_decoder_for_ApplicationServersInformation = function (el: _Element): ApplicationServersInformation {
    let applicationServersInvolved: OPTIONAL<NodeAddress>;
    let applicationProvidedCalledParties: OPTIONAL<InvolvedParty[]>;
    let sTatus: OPTIONAL<Status>;
    const callbacks: $.DecodingMap = {
        "applicationServersInvolved": (_el: _Element): void => { applicationServersInvolved = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "applicationProvidedCalledParties": (_el: _Element): void => { applicationProvidedCalledParties = $._decode_implicit<InvolvedParty[]>(() => $._decodeSequenceOf<InvolvedParty>(() => _decode_InvolvedParty))(_el); },
        "sTatus": (_el: _Element): void => { sTatus = $._decode_implicit<Status>(() => _decode_Status)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplicationServersInformation,
        _extension_additions_list_spec_for_ApplicationServersInformation,
        _root_component_type_list_2_spec_for_ApplicationServersInformation,
        undefined,
    );
    return new ApplicationServersInformation(
        applicationServersInvolved,
        applicationProvidedCalledParties,
        sTatus
    );
}; }
    return _cached_decoder_for_ApplicationServersInformation(el);
}

let _cached_encoder_for_ApplicationServersInformation: $.ASN1Encoder<ApplicationServersInformation> | null = null;

/**
 * @summary Encodes a(n) ApplicationServersInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationServersInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationServersInformation (value: ApplicationServersInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationServersInformation) { _cached_encoder_for_ApplicationServersInformation = function (value: ApplicationServersInformation, _elGetter: $.ASN1Encoder<ApplicationServersInformation>): _Element {
    const _components: _Element[] = [];
    if (value.applicationServersInvolved !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_NodeAddress, $.BER)(value.applicationServersInvolved, $.BER));
    }
    if (value.applicationProvidedCalledParties !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<InvolvedParty>(() => _encode_InvolvedParty, $.BER), $.BER)(value.applicationProvidedCalledParties, $.BER));
    }
    if (value.sTatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Status, $.BER)(value.sTatus, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ApplicationServersInformation(value, elGetter);
}


/* eslint-enable */
