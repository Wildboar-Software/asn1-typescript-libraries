/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffInformation, _decode_TariffInformation, _encode_TariffInformation } from "../MMTelChargingDataTypes/TariffInformation.ta.mjs";
import { AoCCostInformation, _decode_AoCCostInformation, _encode_AoCCostInformation } from "../MMTelChargingDataTypes/AoCCostInformation.ta.mjs";


/**
 * @summary AoCInformation
 * @description
 *
 * AoC information is the AoC related Charging information transferred to the
 * CDF, as defined in TS 32.280 [21].
 *
 * One Advice of Charge report for the MMTel AoC service. The modes
 * are AoC at set-up, during the communication, and at the end.
 * TS 32.275 allows the enclosing sequence to repeat, for example
 * when AoC at set-up is sent more than once. The information flows
 * between the AoC AS and the CDF are specified in TS 32.280.
 * Table 5.0.1 of TS 32.275 marks AoC for offline charging only.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.3A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AoCInformation ::= SET {
 *    tariffInformation    [0] IMPLICIT TariffInformation OPTIONAL,
 *    aoCCostInformation   [1] IMPLICIT AoCCostInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AoCInformation {
    /**
     * @summary `tariffInformation`.
     * @description
     *
     * This field holds the tariff mapped in the Tariff Information structure.
     * The corresponding structure of the Tariff Information can be found in the
     * TS 32.299 [50]. The formatting from real time tariff information to Tariff
     * Information structure is described in TS 32 280 [40].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.67.
     *
     * @public
     * @readonly
     */
    readonly tariffInformation: OPTIONAL<TariffInformation>;
    /**
     * @summary `aoCCostInformation`.
     * @public
     * @readonly
     */
    readonly aoCCostInformation: OPTIONAL<AoCCostInformation>;

    constructor (
        tariffInformation?: OPTIONAL<TariffInformation>,
        aoCCostInformation?: OPTIONAL<AoCCostInformation>
    ) {
        this.tariffInformation = tariffInformation;
        this.aoCCostInformation = aoCCostInformation;
    }

    /**
     * @summary Restructures an object into a AoCInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AoCInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AoCInformation`.
     * @returns {AoCInformation}
     */
    public static _from_object (_o: { [_K in keyof (AoCInformation)]: (AoCInformation)[_K] }): AoCInformation {
        return new AoCInformation(_o.tariffInformation, _o.aoCCostInformation);
    }


}

/**
 * @summary The Leading Root Component Types of AoCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AoCInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("tariffInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aoCCostInformation", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AoCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AoCInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AoCInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AoCInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AoCInformation: $.ASN1Decoder<AoCInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AoCInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AoCInformation (el: _Element): AoCInformation {
    if (!_cached_decoder_for_AoCInformation) { _cached_decoder_for_AoCInformation = function (el: _Element): AoCInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let tariffInformation: OPTIONAL<TariffInformation>;
    let aoCCostInformation: OPTIONAL<AoCCostInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "tariffInformation": (_el: _Element): void => { tariffInformation = $._decode_implicit<TariffInformation>(() => _decode_TariffInformation)(_el); },
        "aoCCostInformation": (_el: _Element): void => { aoCCostInformation = $._decode_implicit<AoCCostInformation>(() => _decode_AoCCostInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AoCInformation,
        _extension_additions_list_spec_for_AoCInformation,
        _root_component_type_list_2_spec_for_AoCInformation,
        undefined,
    );
    return new AoCInformation( /* SET_CONSTRUCTOR_CALL */
        tariffInformation,
        aoCCostInformation
    );
}; }
    return _cached_decoder_for_AoCInformation(el);
}

let _cached_encoder_for_AoCInformation: $.ASN1Encoder<AoCInformation> | null = null;

/**
 * @summary Encodes a(n) AoCInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AoCInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AoCInformation (value: AoCInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AoCInformation) { _cached_encoder_for_AoCInformation = function (value: AoCInformation, _elGetter: $.ASN1Encoder<AoCInformation>): _Element {
    const _components: _Element[] = [];
    if (value.tariffInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_TariffInformation, $.BER)(value.tariffInformation, $.BER));
    }
    if (value.aoCCostInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AoCCostInformation, $.BER)(value.aoCCostInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_AoCInformation(value, elGetter);
}


/* eslint-enable */
