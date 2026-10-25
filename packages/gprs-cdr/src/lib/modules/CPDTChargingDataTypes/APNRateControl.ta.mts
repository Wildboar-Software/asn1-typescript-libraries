/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { APNRateControlParameters, _decode_APNRateControlParameters, _encode_APNRateControlParameters } from "../CPDTChargingDataTypes/APNRateControlParameters.ta.mjs";


/**
 * @summary APNRateControl
 * @description
 *
 * APN Rate Control enforced in the SCEF for the PDN connection, as
 * specified in TS 29.128. It is a field of the CPDT-SCE-CDR. A change
 * closes that CDR, and a new one is opened if the PDN connection stays
 * active. Table 6.3.2.1 allows the Rf information element only from
 * the SCEF.
 *
 * TS 32.253 does not define `aPNRateControlUplink` or
 * `aPNRateControlDownlink`.
 *
 * 3GPP TS 32.253 V19.0.0 clause 5.2.1, table 6.1.3.2.1, and
 * table 6.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControl ::= SEQUENCE {
 *    aPNRateControlUplink     [0] IMPLICIT APNRateControlParameters OPTIONAL, 
 *    aPNRateControlDownlink   [1] IMPLICIT APNRateControlParameters OPTIONAL}
 * ```
 * 
 * @class
 */
export
class APNRateControl {
    /**
     * @summary `aPNRateControlUplink`.
     * @public
     * @readonly
     */
    readonly aPNRateControlUplink: OPTIONAL<APNRateControlParameters>;
    /**
     * @summary `aPNRateControlDownlink`.
     * @public
     * @readonly
     */
    readonly aPNRateControlDownlink: OPTIONAL<APNRateControlParameters>;

    constructor (
        aPNRateControlUplink?: OPTIONAL<APNRateControlParameters>,
        aPNRateControlDownlink?: OPTIONAL<APNRateControlParameters>
    ) {
        this.aPNRateControlUplink = aPNRateControlUplink;
        this.aPNRateControlDownlink = aPNRateControlDownlink;
    }

    /**
     * @summary Restructures an object into a APNRateControl
     * @description
     * 
     * This takes an `object` and converts it to a `APNRateControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `APNRateControl`.
     * @returns {APNRateControl}
     */
    public static _from_object (_o: { [_K in keyof (APNRateControl)]: (APNRateControl)[_K] }): APNRateControl {
        return new APNRateControl(_o.aPNRateControlUplink, _o.aPNRateControlDownlink);
    }


}

/**
 * @summary The Leading Root Component Types of APNRateControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_APNRateControl: $.ComponentSpec[] = [
    new $.ComponentSpec("aPNRateControlUplink", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aPNRateControlDownlink", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of APNRateControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_APNRateControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of APNRateControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_APNRateControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_APNRateControl: $.ASN1Decoder<APNRateControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APNRateControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APNRateControl (el: _Element): APNRateControl {
    if (!_cached_decoder_for_APNRateControl) { _cached_decoder_for_APNRateControl = function (el: _Element): APNRateControl {
    let aPNRateControlUplink: OPTIONAL<APNRateControlParameters>;
    let aPNRateControlDownlink: OPTIONAL<APNRateControlParameters>;
    const callbacks: $.DecodingMap = {
        "aPNRateControlUplink": (_el: _Element): void => { aPNRateControlUplink = $._decode_implicit<APNRateControlParameters>(() => _decode_APNRateControlParameters)(_el); },
        "aPNRateControlDownlink": (_el: _Element): void => { aPNRateControlDownlink = $._decode_implicit<APNRateControlParameters>(() => _decode_APNRateControlParameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_APNRateControl,
        _extension_additions_list_spec_for_APNRateControl,
        _root_component_type_list_2_spec_for_APNRateControl,
        undefined,
    );
    return new APNRateControl(
        aPNRateControlUplink,
        aPNRateControlDownlink
    );
}; }
    return _cached_decoder_for_APNRateControl(el);
}

let _cached_encoder_for_APNRateControl: $.ASN1Encoder<APNRateControl> | null = null;

/**
 * @summary Encodes a(n) APNRateControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APNRateControl, encoded as an ASN.1 Element.
 */
export
function _encode_APNRateControl (value: APNRateControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APNRateControl) { _cached_encoder_for_APNRateControl = function (value: APNRateControl, _elGetter: $.ASN1Encoder<APNRateControl>): _Element {
    const _components: _Element[] = [];
    if (value.aPNRateControlUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_APNRateControlParameters, $.BER)(value.aPNRateControlUplink, $.BER));
    }
    if (value.aPNRateControlDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_APNRateControlParameters, $.BER)(value.aPNRateControlDownlink, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_APNRateControl(value, elGetter);
}


/* eslint-enable */
