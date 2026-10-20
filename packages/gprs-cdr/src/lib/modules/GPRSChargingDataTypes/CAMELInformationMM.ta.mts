/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DefaultTransactionHandling, _encode_DefaultTransactionHandling, _enum_for_DefaultTransactionHandling, DefaultTransactionHandling } from "../GPRSChargingDataTypes/DefaultTransactionHandling.ta.mjs";
import { _decode_CAMELInformationMM_levelOfCAMELService, _encode_CAMELInformationMM_levelOfCAMELService, CAMELInformationMM_levelOfCAMELService } from "../GPRSChargingDataTypes/CAMELInformationMM-levelOfCAMELService.ta.mjs";


/**
 * @summary CAMELInformationMM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformationMM ::= SET {
 *    sCFAddress                   [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    serviceKey                   [2] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    defaultTransactionHandling   [3] IMPLICIT DefaultTransactionHandling OPTIONAL,
 *    numberOfDPEncountered        [4] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService          [5] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData               [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    fFDAppendIndicator           [7] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CAMELInformationMM {
    /**
     * @summary `sCFAddress`.
     * @public
     * @readonly
     */
    readonly sCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
    /**
     * @summary `defaultTransactionHandling`.
     * @public
     * @readonly
     */
    readonly defaultTransactionHandling: OPTIONAL<DefaultTransactionHandling>;
    /**
     * @summary `numberOfDPEncountered`.
     * @public
     * @readonly
     */
    readonly numberOfDPEncountered: OPTIONAL<INTEGER>;
    /**
     * @summary `levelOfCAMELService`.
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<CAMELInformationMM_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fFDAppendIndicator`.
     * @public
     * @readonly
     */
    readonly fFDAppendIndicator: OPTIONAL<BOOLEAN>;

    constructor (
        sCFAddress: OPTIONAL<OCTET_STRING>,
        serviceKey: OPTIONAL<INTEGER>,
        defaultTransactionHandling: OPTIONAL<DefaultTransactionHandling>,
        numberOfDPEncountered: OPTIONAL<INTEGER>,
        levelOfCAMELService: OPTIONAL<CAMELInformationMM_levelOfCAMELService>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        fFDAppendIndicator: OPTIONAL<BOOLEAN>
    ) {
        this.sCFAddress = sCFAddress;
        this.serviceKey = serviceKey;
        this.defaultTransactionHandling = defaultTransactionHandling;
        this.numberOfDPEncountered = numberOfDPEncountered;
        this.levelOfCAMELService = levelOfCAMELService;
        this.freeFormatData = freeFormatData;
        this.fFDAppendIndicator = fFDAppendIndicator;
    
        if (this.sCFAddress !== undefined && (this.sCFAddress.length < 1 || this.sCFAddress.length > 20)) {
            throw new ASN1SizeError("CAMELInformationMM.sCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && ((typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) < 0 || (typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) > 2147483647)) {
            throw new ASN1OverflowError("CAMELInformationMM.serviceKey violates INTEGER range");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELInformationMM.freeFormatData violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELInformationMM
     * @description
     * 
     * This takes an `object` and converts it to a `CAMELInformationMM`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELInformationMM`.
     * @returns {CAMELInformationMM}
     */
    public static _from_object (_o: { [_K in keyof (CAMELInformationMM)]: (CAMELInformationMM)[_K] }): CAMELInformationMM {
        return new CAMELInformationMM(_o.sCFAddress, _o.serviceKey, _o.defaultTransactionHandling, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.fFDAppendIndicator);
    }

        /**
         * @summary The enum used as the type of the component `defaultTransactionHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultTransactionHandling = _enum_for_DefaultTransactionHandling;
}

/**
 * @summary The Leading Root Component Types of CAMELInformationMM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELInformationMM: $.ComponentSpec[] = [
    new $.ComponentSpec("sCFAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("defaultTransactionHandling", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("fFDAppendIndicator", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of CAMELInformationMM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELInformationMM: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELInformationMM
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELInformationMM: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELInformationMM: $.ASN1Decoder<CAMELInformationMM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELInformationMM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELInformationMM (el: _Element): CAMELInformationMM {
    if (!_cached_decoder_for_CAMELInformationMM) { _cached_decoder_for_CAMELInformationMM = function (el: _Element): CAMELInformationMM {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let sCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let defaultTransactionHandling: OPTIONAL<DefaultTransactionHandling>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<CAMELInformationMM_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let fFDAppendIndicator: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "sCFAddress": (_el: _Element): void => { sCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "defaultTransactionHandling": (_el: _Element): void => { defaultTransactionHandling = $._decode_implicit<DefaultTransactionHandling>(() => _decode_DefaultTransactionHandling)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<CAMELInformationMM_levelOfCAMELService>(() => _decode_CAMELInformationMM_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fFDAppendIndicator": (_el: _Element): void => { fFDAppendIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELInformationMM,
        _extension_additions_list_spec_for_CAMELInformationMM,
        _root_component_type_list_2_spec_for_CAMELInformationMM,
        undefined,
    );
    return new CAMELInformationMM( /* SET_CONSTRUCTOR_CALL */
        sCFAddress,
        serviceKey,
        defaultTransactionHandling,
        numberOfDPEncountered,
        levelOfCAMELService,
        freeFormatData,
        fFDAppendIndicator
    );
}; }
    return _cached_decoder_for_CAMELInformationMM(el);
}

let _cached_encoder_for_CAMELInformationMM: $.ASN1Encoder<CAMELInformationMM> | null = null;

/**
 * @summary Encodes a(n) CAMELInformationMM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELInformationMM, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELInformationMM (value: CAMELInformationMM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELInformationMM) { _cached_encoder_for_CAMELInformationMM = function (value: CAMELInformationMM, _elGetter: $.ASN1Encoder<CAMELInformationMM>): _Element {
    const _components: _Element[] = [];
    if (value.sCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.defaultTransactionHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DefaultTransactionHandling, $.BER)(value.defaultTransactionHandling, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CAMELInformationMM_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.fFDAppendIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.fFDAppendIndicator, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELInformationMM(value, elGetter);
}


/* eslint-enable */
