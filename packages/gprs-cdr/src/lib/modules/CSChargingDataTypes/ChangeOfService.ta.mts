/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { TransparencyInd, _decode_TransparencyInd, _encode_TransparencyInd, _enum_for_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";


/**
 * @summary ChangeOfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfService ::= SEQUENCE {
 *    basicService      [0] BasicService,
 *    transparencyInd   [1] IMPLICIT TransparencyInd OPTIONAL,
 *    changeTime        [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    rateIndication    [3] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    fnur              [4] IMPLICIT Fnur OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfService {
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `transparencyInd`.
     * @public
     * @readonly
     */
    readonly transparencyInd: OPTIONAL<TransparencyInd>;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `rateIndication`.
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fnur`.
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;

    constructor (
        basicService: BasicService,
        transparencyInd: OPTIONAL<TransparencyInd>,
        changeTime: OCTET_STRING,
        rateIndication: OPTIONAL<OCTET_STRING>,
        fnur: OPTIONAL<Fnur>
    ) {
        this.basicService = basicService;
        this.transparencyInd = transparencyInd;
        this.changeTime = changeTime;
        this.rateIndication = rateIndication;
        this.fnur = fnur;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeOfService.changeTime violates SIZE constraint");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("ChangeOfService.rateIndication violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfService
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfService`.
     * @returns {ChangeOfService}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfService)]: (ChangeOfService)[_K] }): ChangeOfService {
        return new ChangeOfService(_o.basicService, _o.transparencyInd, _o.changeTime, _o.rateIndication, _o.fnur);
    }

        /**
         * @summary The enum used as the type of the component `transparencyInd`
         * @public
         * @static
         */

    public static _enum_for_transparencyInd = _enum_for_TransparencyInd;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;
}

/**
 * @summary The Leading Root Component Types of ChangeOfService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfService: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("transparencyInd", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfService: $.ASN1Decoder<ChangeOfService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfService (el: _Element): ChangeOfService {
    if (!_cached_decoder_for_ChangeOfService) { _cached_decoder_for_ChangeOfService = function (el: _Element): ChangeOfService {
    let basicService!: BasicService;
    let transparencyInd: OPTIONAL<TransparencyInd>;
    let changeTime!: OCTET_STRING;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let fnur: OPTIONAL<Fnur>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "transparencyInd": (_el: _Element): void => { transparencyInd = $._decode_implicit<TransparencyInd>(() => _decode_TransparencyInd)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfService,
        _extension_additions_list_spec_for_ChangeOfService,
        _root_component_type_list_2_spec_for_ChangeOfService,
        undefined,
    );
    return new ChangeOfService(
        basicService,
        transparencyInd,
        changeTime,
        rateIndication,
        fnur
    );
}; }
    return _cached_decoder_for_ChangeOfService(el);
}

let _cached_encoder_for_ChangeOfService: $.ASN1Encoder<ChangeOfService> | null = null;

/**
 * @summary Encodes a(n) ChangeOfService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfService, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfService (value: ChangeOfService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfService) { _cached_encoder_for_ChangeOfService = function (value: ChangeOfService, _elGetter: $.ASN1Encoder<ChangeOfService>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    if (value.transparencyInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_TransparencyInd, $.BER)(value.transparencyInd, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfService(value, elGetter);
}


/* eslint-enable */
