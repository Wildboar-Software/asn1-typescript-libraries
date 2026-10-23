/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSAgentAddress, _decode_MMSAgentAddress, _encode_MMSAgentAddress } from "../MMSChargingDataTypes/MMSAgentAddress.ta.mjs";


/**
 * @summary MSCFInformation
 * @description
 *
 * This is a grouped field comprising several the following sub-fields
 * associated with the invocation of the MSCF for advanced addressing:
 * Billing Information; Routeing address List. These field elements are
 * described in the appropriate subclause.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.29.
 *
 * Parameters the MSCF supplies when it interacts with the MMS R/S over
 * MM10 before the response that closes the transaction. That response is
 * MM1_submit.RES on an O1S-CDR, MM1_notification.REQ on an R1NRq-CDR, and
 * MM7_submit.RES on an MM7S-CDR. Category OC. Clause 5.1 collects this
 * information in scenarios that involve the MSCF. TS 32.270 does not
 * further define billing information.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 5.1, 6.1.1.1, 6.1.2.2, and 6.1.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSCFInformation ::= SET {
 *    billingInformation    [0] IMPLICIT OCTET STRING OPTIONAL,
 *    routeingAddressList   [1] IMPLICIT SET  OF
 *       MMSAgentAddress OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MSCFInformation {
    /**
     * @summary `billingInformation`.
     * @description
     *
     * Billing information supplied by the MSCF over MM10. TS 32.270 does not
     * define its contents.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly billingInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `routeingAddressList`.
     * @description
     *
     * This field contains a list of routeing addresses.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.50.
     *
     * Routeing addresses supplied by the MSCF over MM10. Each element is an
     * MMS User Agent address.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly routeingAddressList: OPTIONAL<MMSAgentAddress[]>;

    constructor (
        billingInformation?: OPTIONAL<OCTET_STRING>,
        routeingAddressList?: OPTIONAL<MMSAgentAddress[]>
    ) {
        this.billingInformation = billingInformation;
        this.routeingAddressList = routeingAddressList;
    }

    /**
     * @summary Restructures an object into a MSCFInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MSCFInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSCFInformation`.
     * @returns {MSCFInformation}
     */
    public static _from_object (_o: { [_K in keyof (MSCFInformation)]: (MSCFInformation)[_K] }): MSCFInformation {
        return new MSCFInformation(_o.billingInformation, _o.routeingAddressList);
    }


}

/**
 * @summary The Leading Root Component Types of MSCFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSCFInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("billingInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routeingAddressList", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MSCFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSCFInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSCFInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MSCFInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSCFInformation: $.ASN1Decoder<MSCFInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSCFInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSCFInformation (el: _Element): MSCFInformation {
    if (!_cached_decoder_for_MSCFInformation) { _cached_decoder_for_MSCFInformation = function (el: _Element): MSCFInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let billingInformation: OPTIONAL<OCTET_STRING>;
    let routeingAddressList: OPTIONAL<MMSAgentAddress[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "billingInformation": (_el: _Element): void => { billingInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "routeingAddressList": (_el: _Element): void => { routeingAddressList = $._decode_implicit<MMSAgentAddress[]>(() => $._decodeSetOf<MMSAgentAddress>(() => _decode_MMSAgentAddress))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MSCFInformation,
        _extension_additions_list_spec_for_MSCFInformation,
        _root_component_type_list_2_spec_for_MSCFInformation,
        undefined,
    );
    return new MSCFInformation( /* SET_CONSTRUCTOR_CALL */
        billingInformation,
        routeingAddressList
    );
}; }
    return _cached_decoder_for_MSCFInformation(el);
}

let _cached_encoder_for_MSCFInformation: $.ASN1Encoder<MSCFInformation> | null = null;

/**
 * @summary Encodes a(n) MSCFInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSCFInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MSCFInformation (value: MSCFInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSCFInformation) { _cached_encoder_for_MSCFInformation = function (value: MSCFInformation, _elGetter: $.ASN1Encoder<MSCFInformation>): _Element {
    const _components: _Element[] = [];
    if (value.billingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.billingInformation, $.BER));
    }
    if (value.routeingAddressList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<MMSAgentAddress>(() => _encode_MMSAgentAddress, $.BER), $.BER)(value.routeingAddressList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MSCFInformation(value, elGetter);
}


/* eslint-enable */
