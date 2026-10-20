/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";

/**
 * @summary CcRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CcRequestArg ::= SEQUENCE {
 *     numberA PresentedNumberUnscreened,
 *     numberB PartyNumber,
 *     service PSS1InformationElement,
 *     -- permitted information elements are:
 *     -- Bearer capability; Low layer compatibility; High layer compatibility
 *     subaddrA [10] PartySubaddress OPTIONAL,
 *     subaddrB [11] PartySubaddress OPTIONAL,
 *     can-retain-service [12] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     retain-sig-connection [13] IMPLICIT BOOLEAN OPTIONAL,
 *     -- TRUE: signalling connection to be retained;
 *     -- FALSE: signalling connection to be released;
 *     -- omission: release or retain signalling connection--
 *     extension CcExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CcRequestArg {
    /**
     * @summary `numberA`.
     * @public
     * @readonly
     */
    readonly numberA: PresentedNumberUnscreened;
    /**
     * @summary `numberB`.
     * @public
     * @readonly
     */
    readonly numberB: PartyNumber;
    /**
     * @summary `service`.
     * @public
     * @readonly
     */
    readonly service: PSS1InformationElement;
    /**
     * @summary `subaddrA`.
     * @public
     * @readonly
     */
    readonly subaddrA: OPTIONAL<PartySubaddress>;
    /**
     * @summary `subaddrB`.
     * @public
     * @readonly
     */
    readonly subaddrB: OPTIONAL<PartySubaddress>;
    /**
     * @summary `can_retain_service`.
     * @public
     * @readonly
     */
    readonly can_retain_service: OPTIONAL<BOOLEAN>;
    /**
     * @summary `retain_sig_connection`.
     * @public
     * @readonly
     */
    readonly retain_sig_connection: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CcExtension>;

    constructor (
        numberA: PresentedNumberUnscreened,
        numberB: PartyNumber,
        service: PSS1InformationElement,
        subaddrA: OPTIONAL<PartySubaddress>,
        subaddrB: OPTIONAL<PartySubaddress>,
        can_retain_service: OPTIONAL<BOOLEAN>,
        retain_sig_connection: OPTIONAL<BOOLEAN>,
        extension: OPTIONAL<CcExtension>
    ) {
        this.numberA = numberA;
        this.numberB = numberB;
        this.service = service;
        this.subaddrA = subaddrA;
        this.subaddrB = subaddrB;
        this.can_retain_service = can_retain_service;
        this.retain_sig_connection = retain_sig_connection;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CcRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CcRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CcRequestArg`.
     * @returns {CcRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CcRequestArg)]: (CcRequestArg)[_K] }): CcRequestArg {
        return new CcRequestArg(_o.numberA, _o.numberB, _o.service, _o.subaddrA, _o.subaddrB, _o.can_retain_service, _o.retain_sig_connection, _o.extension);
    }

    /**
     * @summary Getter that returns the default value for `can_retain_service`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_can_retain_service () { return false; }
}

/**
 * @summary The Leading Root Component Types of CcRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CcRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("numberA", false, $.hasAnyTag),
    new $.ComponentSpec("numberB", false, $.hasAnyTag),
    new $.ComponentSpec("service", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("subaddrA", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("subaddrB", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("can-retain-service", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("retain-sig-connection", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 14), $.hasTag(_TagClass.context, 15)))
];

/**
 * @summary The Trailing Root Component Types of CcRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CcRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CcRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CcRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CcRequestArg: $.ASN1Decoder<CcRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CcRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CcRequestArg (el: _Element): CcRequestArg {
    if (!_cached_decoder_for_CcRequestArg) { _cached_decoder_for_CcRequestArg = function (el: _Element): CcRequestArg {
    let numberA!: PresentedNumberUnscreened;
    let numberB!: PartyNumber;
    let service!: PSS1InformationElement;
    let subaddrA: OPTIONAL<PartySubaddress>;
    let subaddrB: OPTIONAL<PartySubaddress>;
    let can_retain_service: OPTIONAL<BOOLEAN> = CcRequestArg._default_value_for_can_retain_service;
    let retain_sig_connection: OPTIONAL<BOOLEAN>;
    let extension: OPTIONAL<CcExtension>;
    const callbacks: $.DecodingMap = {
        "numberA": (_el: _Element): void => { numberA = _decode_PresentedNumberUnscreened(_el); },
        "numberB": (_el: _Element): void => { numberB = _decode_PartyNumber(_el); },
        "service": (_el: _Element): void => { service = _decode_PSS1InformationElement(_el); },
        "subaddrA": (_el: _Element): void => { subaddrA = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "subaddrB": (_el: _Element): void => { subaddrB = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "can-retain-service": (_el: _Element): void => { can_retain_service = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retain-sig-connection": (_el: _Element): void => { retain_sig_connection = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CcExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CcRequestArg,
        _extension_additions_list_spec_for_CcRequestArg,
        _root_component_type_list_2_spec_for_CcRequestArg,
        undefined,
    );
    return new CcRequestArg(
        numberA,
        numberB,
        service,
        subaddrA,
        subaddrB,
        can_retain_service,
        retain_sig_connection,
        extension
    );
}; }
    return _cached_decoder_for_CcRequestArg(el);
}

let _cached_encoder_for_CcRequestArg: $.ASN1Encoder<CcRequestArg> | null = null;

/**
 * @summary Encodes a(n) CcRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CcRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CcRequestArg (value: CcRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CcRequestArg) { _cached_encoder_for_CcRequestArg = function (value: CcRequestArg, _elGetter: $.ASN1Encoder<CcRequestArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PresentedNumberUnscreened(value.numberA, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.numberB, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.service, $.BER));
    if (value.subaddrA !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_PartySubaddress, $.BER)(value.subaddrA, $.BER));
    }
    if (value.subaddrB !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_PartySubaddress, $.BER)(value.subaddrB, $.BER));
    }
    if (value.can_retain_service !== undefined && !$.deepEq(value.can_retain_service, CcRequestArg._default_value_for_can_retain_service)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.can_retain_service, $.BER));
    }
    if (value.retain_sig_connection !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.retain_sig_connection, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CcExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CcRequestArg(value, elGetter);
}

/* eslint-enable */
