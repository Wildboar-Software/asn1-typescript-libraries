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
import { type AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../CAP-datatypes/AChBillingChargingCharacteristics.ta.mjs";
import { type AChChargingAddress, _decode_AChChargingAddress, _encode_AChChargingAddress } from "../CAP-datatypes/AChChargingAddress.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type SendingSideID, _decode_SendingSideID, _encode_SendingSideID } from "../CAP-datatypes/SendingSideID.ta.mjs";
import { leg1 } from "../Core-INAP-CS1-DataTypes/leg1.va.mjs";



/**
 * @summary ApplyChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     aChBillingChargingCharacteristics    [0] AChBillingChargingCharacteristics {bound},
 *     partyToCharge            [2] SendingSideID DEFAULT sendingSideID : leg1,
 *     extensions                [3] Extensions {bound}            OPTIONAL,
 *     aChChargingAddress            [50] AChChargingAddress {bound}
 *                         DEFAULT legID:sendingSideID:leg1,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ApplyChargingArg {
    constructor (
        /**
         * @summary `aChBillingChargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly aChBillingChargingCharacteristics: AChBillingChargingCharacteristics,
        /**
         * @summary `partyToCharge`.
         * @public
         * @readonly
         */
        readonly partyToCharge: OPTIONAL<SendingSideID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `aChChargingAddress`.
         * @public
         * @readonly
         */
        readonly aChChargingAddress: OPTIONAL<AChChargingAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ApplyChargingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ApplyChargingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplyChargingArg`.
     * @returns {ApplyChargingArg}
     */
    public static _from_object (_o: { [_K in keyof (ApplyChargingArg)]: (ApplyChargingArg)[_K] }): ApplyChargingArg {
        return new ApplyChargingArg(_o.aChBillingChargingCharacteristics, _o.partyToCharge, _o.extensions, _o.aChChargingAddress, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `partyToCharge`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_partyToCharge () { return { sendingSideID: leg1 }; }
    /**
     * @summary Getter that returns the default value for `aChChargingAddress`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aChChargingAddress () { return { legID: { sendingSideID: leg1 } }; }
}

/**
 * @summary The Leading Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aChBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyToCharge", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aChChargingAddress", true, $.hasTag(_TagClass.context, 50))
];

/**
 * @summary The Trailing Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplyChargingArg: $.ASN1Decoder<ApplyChargingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingArg (el: _Element): ApplyChargingArg {
    if (!_cached_decoder_for_ApplyChargingArg) { _cached_decoder_for_ApplyChargingArg = function (el: _Element): ApplyChargingArg {
    let aChBillingChargingCharacteristics!: AChBillingChargingCharacteristics;
    let partyToCharge: OPTIONAL<SendingSideID> = ApplyChargingArg._default_value_for_partyToCharge;
    let extensions: OPTIONAL<Extensions>;
    let aChChargingAddress: OPTIONAL<AChChargingAddress> = ApplyChargingArg._default_value_for_aChChargingAddress;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aChBillingChargingCharacteristics": (_el: _Element): void => { aChBillingChargingCharacteristics = $._decode_implicit<AChBillingChargingCharacteristics>(() => _decode_AChBillingChargingCharacteristics)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_implicit<SendingSideID>(() => _decode_SendingSideID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "aChChargingAddress": (_el: _Element): void => { aChChargingAddress = $._decode_implicit<AChChargingAddress>(() => _decode_AChChargingAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingArg,
        _extension_additions_list_spec_for_ApplyChargingArg,
        _root_component_type_list_2_spec_for_ApplyChargingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ApplyChargingArg(
        aChBillingChargingCharacteristics,
        partyToCharge,
        extensions,
        aChChargingAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ApplyChargingArg(el);
}

let _cached_encoder_for_ApplyChargingArg: $.ASN1Encoder<ApplyChargingArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingArg (value: ApplyChargingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingArg) { _cached_encoder_for_ApplyChargingArg = function (value: ApplyChargingArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AChBillingChargingCharacteristics, $.BER)(value.aChBillingChargingCharacteristics, $.BER),
            /* IF_DEFAULT */ (value.partyToCharge === undefined || $.deepEq(value.partyToCharge, ApplyChargingArg._default_value_for_partyToCharge) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SendingSideID, $.BER)(value.partyToCharge, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_DEFAULT */ (value.aChChargingAddress === undefined || $.deepEq(value.aChChargingAddress, ApplyChargingArg._default_value_for_aChChargingAddress) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_AChChargingAddress, $.BER)(value.aChChargingAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ApplyChargingArg(value, elGetter);
}


/* eslint-enable */
